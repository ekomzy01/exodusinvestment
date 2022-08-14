import React from "react";

const Investors = () => {
  return (
    <section className="x-info">
      <div className="x__width">
        <svg
          className="x-info__icn"
          version="1.1"
          viewBox="0 0 18 24"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" opacity=".3">
            <g fill="#fff">
              <path d="m14 7l4 5h-15v-5h11z"></path>
              <polygon points="14 7 3 7 3 2 18 2" opacity=".5"></polygon>
              <rect width="1" height="24"></rect>
            </g>
          </g>
        </svg>
        <div className="row">
          <div className="col col-12 col-lg-3">
            <span className="x-info__subheading">Founded in</span>
            <span className="x-info__heading">2015</span>
            <span className="x-info__txt">
              By JP Richardson and{" "}
              <span className="x-break-lg">Daniel Castagnoli</span>
            </span>
          </div>
          <div className="col col-12 col-lg-3">
            <span className="x-info__subheading">Product Updates</span>
            <span className="x-info__heading">200+</span>
            <span className="x-info__txt">
              New releases across desktop, mobile and hardware
            </span>
          </div>
          <div className="col col-12 col-lg-3">
            <span className="x-info__subheading">New Release Every</span>
            <span className="x-info__heading">2 Weeks</span>
            <span className="x-info__txt">
              Released software every two weeks since 2015
            </span>
          </div>
          <div className="col col-12 col-lg-3">
            <span className="x-info__subheading">Digital Assets</span>
            <span className="x-info__heading">225+</span>
            <span className="x-info__txt">
              Supported cryptocurrencies inside Exodus products
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
