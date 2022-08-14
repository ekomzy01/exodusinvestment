import React from "react";
import "./about.css";
import Brand from "./Brand";
import Careers from "./Careers";
import Investors from "./Investors";

const About = () => {
  return (
    <>
      <header className="x-header">
        <div className="x-header__darken" id="x-header__darken"></div>
        <div
          className="x-header__bg-container rellax"
          data-rellax-speed="-4"
          style={{ transform: "translate3d(0px, 12px, 0px)" }}>
          <div
            className="x__header-bg gatsby-image-wrapper"
            style={{ position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                width: "100%",
                paddingBottom: "55.55555555555556%",
              }}></div>
            <picture>
              <source
                srcSet="./about/img/header-bg-ssize.jpg 640w,./about/img/header-bg-msize.jpg 1536w,//about/img/header-bg-lsize.jpg 3200w"
                sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,3200px"
              />
              <img
                sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,3200px"
                srcSet="./about/img/header-bg-ssize.jpg 640w,./about/img/header-bg-msize.jpg 1536w,./about/img/header-bg-lsize.jpg 3200w"
                src="./about/img/header-bg-lsize.jpg"
                alt="Exodus empowers people to control their wealth"
                loading="lazy"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: "1",
                  transition: "opacity 2000ms ease 0s",
                }}
              />
            </picture>
            <noscript>
              <picture>
                <source
                  srcSet="./about/img/header-bg-ssize.jpg 640w,./about/img/header-bg-msize.jpg 1536w,./about/img/header-bg-lsize.jpg 3200w"
                  sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,3200px"
                />
                <img
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,3200px"
                  srcSet="./about/img/header-bg-ssize.jpg 640w,./about/img/header-bg-msize.jpg 1536w,./about/img/header-bg-lsize.jpg 3200w"
                  src="./about/img/header-bg-lsize.jpg"
                  alt="Exodus empowers people to control their wealth"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: "1",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </picture>
            </noscript>
          </div>
        </div>
        <div className="x-header__content">
          <div className="x-header__txt-container x__width">
            <h1 className="x-header__heading">
              <span>Exodus empowers people to</span>
              <br />
              <span>control their wealth.</span>
            </h1>
          </div>
        </div>
      </header>
      <Brand />
      <Careers />
      <Investors />
    </>
  );
};

export default About;
