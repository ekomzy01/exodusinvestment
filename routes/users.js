const express = require("express");
const User = require("../models/User");
const UserVerification = require("../models/UserVerification");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const path = require("path");

const router = express.Router();

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for messages");
    console.log(success);
  }
});

router.post(
  "/",
  [
    check("first_name", "Please add name").not().isEmpty(),
    check("last_name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with at least 6 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
    const { username, first_name, last_name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return resp.status(400).json({ message: "User already exists" });
      }
      user = new User({
        username,
        first_name,
        last_name,
        email,
        password,
        verified: false,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const { id } = user;
      const payload = {
        user: {
          id,
          email,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          sendVerificationEmail(payload.user, token, resp);
        }
      );
    } catch (error) {
      console.log(error.message);
      resp.status(500).send("Server Error");
    }
  }
);

const sendVerificationEmail = ({ id, email }, token, resp) => {
  const currentUrl = "http://localhost:5000/";

  const uniqueString = uuidv4() + id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify Your Email",
    html: `<p>Verify your email address to complete the signup and login into your account</p><p>This link <strong>expires in 6 hours</strong>.</p><p>Press <a href=${
      currentUrl + "api/users/verify/" + id + "/" + uniqueString
    }>here</a> to proceed.</p>`,
  };

  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((hashedUniqueString) => {
      const newVerification = new UserVerification({
        userId: id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      });

      newVerification
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {
              resp.json({
                status: "PENDING",
                message: "Verification email sent",
              });
            })
            .catch((error) => {
              console.log(error);
              resp.json({
                status: "FAILED",
                message: "Verification email failed!",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          resp.json({
            status: "FAILED",
            message: "Could't save verification email data!",
          });
        });
    })
    .catch(() => {
      resp.json({
        status: "FAILED",
        message: "An error occured while hashing email data!",
      });
    });
};

router.get("/verify/:userId/:uniqueString", (req, resp) => {
  let { userId, uniqueString } = req.params;

  UserVerification.find({ userId })
    .then((result) => {
      if (result.length > 0) {
        const { expiresAt } = result[0];
        const hashedUniqueString = result[0].uniqueString;
        console.log(expiresAt);
        console.log(hashedUniqueString);

        if (expiresAt < Date.now()) {
          UserVerification.deleteOne({ userId })
            .then(() => {
              User.deleteOne({ _id: userId })
                .then(() => {
                  let message = "Link has expired. Please sign up again.";
                  resp.redirect(
                    `/api/users/verified/error=true&message=${message}`
                  );
                })
                .catch((error) => {
                  console.log(error);
                  let message =
                    "Clearing user with expired unique string failed";
                  resp.redirect(
                    `/api/users/verified/error=true&message=${message}`
                  );
                });
            })
            .catch((error) => {
              console.log(error);
              let message =
                "An error occurred while clearing expired user verification record!";
              resp.redirect(
                `/api/users/verified/error=true&message=${message}`
              );
            });
        } else {
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                User.updateOne({ _id: userId }, { verified: true })
                  .then(() => {
                    UserVerification.deleteOne({ userId })
                      .then(() => {
                        resp.sendFile(
                          path.join(__dirname, "./../views/verified.html")
                        );
                      })
                      .catch((error) => {
                        console.log(error);
                        let message =
                          "An error occurred while finalizing successful verification!!";
                        resp.redirect(
                          `/api/users/verified/error=true&message=${message}`
                        );
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    let message =
                      "An error occurred while updating user record to show verified!";
                    resp.redirect(
                      `/api/users/verified/error=true&message=${message}`
                    );
                  });
              } else {
                let message =
                  "Invalid verification details passed. Check your inbox!";
                resp.redirect(
                  `/api/users/verified/error=true&message=${message}`
                );
              }
            })
            .catch((error) => {
              console.log(error);
              let message = "An error occurred while comparing unique strings!";
              resp.redirect(
                `/api/users/verified/error=true&message=${message}`
              );
            });
        }
      } else {
        let message =
          "Account record doesn't exist or has been verified already. Please sign up or log in!";
        resp.redirect(`/api/users/verified/error=true&message=${message}`);
      }
    })
    .catch((error) => {
      console.log(error);
      let message = "Could't save verification email data!";
      resp.redirect(`/api/users/verified/error=true&message=${message}`);
    });
});

router.get("/verified", (req, resp) => {
  resp.sendFile(path.join(__dirname, "./../views/verified.html"));
});

module.exports = router;
