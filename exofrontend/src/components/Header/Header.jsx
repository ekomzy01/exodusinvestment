import React, { useState } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assests/images/Exodus_Logo.svg";
import { Spin as Hamburger } from "hamburger-react";
import "./header.css";
import "./hambuger.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const Nav__Link = [
    {
      display: "Product",
      url: "/desktop",
    },
    {
      display: "Support",
      url: "/contact-supports",
    },
    {
      display: "Crypto News",
      url: "https://www.exodus.com/news/",
    },
    {
      display: "Company",
      url: "/about",
    },
    {
      display: "Wallet",
      url: "/wallet",
    },
  ];

  return (
    <header className="header">
      <Container>
        <nav className="navigation d-flex align-item-center justify-content-around">
          <div className="logo d-flex align-item-center">
            <h2 className="d-flex logo-container">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </h2>
          </div>

          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                {Nav__Link.map((item, index) => (
                  <NavLink to={item.url} key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </li>
            </ul>
          </div>

          {/* <button className="header__btn">Download</button> */}
          <div className=" hamburger">
            <Hamburger
              direction="right"
              toggled={isOpen}
              toggle={setOpen}
              size={32}
              duration={0.5}
              distance="lg"
              color="#fff"
              easing="ease-in"
              rounded
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setOpen(toggled);
                  console.log(toggled);
                  console.log(isOpen);
                } else {
                  // close a menu
                  setOpen(false);
                  console.log(isOpen);
                  console.log(toggled);
                }
              }}
            />

            {/* <div className="x__topbar-header navbar-collapse collapse show">
                <div className="x__topbar-header-container">
                  <ul className="x__topbar-header-navigation ">
                    <li className="x__topbar-header-navigation-item">
                      {Nav__Link.map((item, index) => (
                        <NavLink to={item.url} key={index}>
                          {item.display}
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                </div>
              </div> */}

            {isOpen && (
              <div
                className=" navbar-collapse collapse show"
                id="navbarSupportedContent">
                <div className="x__topbar-header-container">
                  <div className="x__topbar-header-logo-space"></div>
                  <ul className="x__topbar-header-navigation" id="headernav">
                    <li className="x__topbar-header-navigation-item x__topbar-header-navigation-item__home">
                      {Nav__Link.map((item, index) => (
                        <NavLink to={item.url} key={index}>
                          {item.display}
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
