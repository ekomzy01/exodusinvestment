import React from "react";

const Brand = () => {
  return (
    <section className="x-mission">
      <div className="x__width">
        <svg
          version="1.1"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" opacity=".2">
            <path
              d="M19.8802 5.5843L11.3633 0V3.12221L16.827 6.67261L16.1842 8.70651H11.3633V11.2935H16.1842L16.827 13.3274L11.3633 16.8778V20L19.8802 14.4335L18.4875 10.0089L19.8802 5.5843Z"
              fill="#1A1D40"></path>
            <path
              d="M3.95338 11.2935H8.75643V8.70651H3.93553L3.3106 6.67261L8.75643 3.12221V0L0.239502 5.5843L1.63221 10.0089L0.239502 14.4335L8.77429 20V16.8778L3.3106 13.3274L3.95338 11.2935Z"
              fill="#1A1D40"></path>
          </g>
        </svg>
        <span className="x-about-subheading">
          Exodus Gives You The Power To
        </span>
        <p className="x-mission__heading">
          Secure, Manage, and Exchange cryptocurrency on desktop, mobile and
          hardware wallets.
        </p>
        <div className="row">
          <div className="col-md-6 x-mission__txt">
            At Exodus we pour our hearts into every detail, from pixel-perfect
            icons to subtle sounds, creating a cryptocurrency experience that
            works for everyone.
          </div>
          <div className="col-md-6 x-mission__txt">
            Our goal is to remove the geek requirement and make it fun and easy
            to learn and use cryptocurrency. No technical talk. No confusing
            steps - we think it shows.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
