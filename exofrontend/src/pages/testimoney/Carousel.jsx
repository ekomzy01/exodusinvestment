import React, { useEffect } from "react";
import Dots from "./Dots";
// import Carousel from "react-elastic-carousel";
import { Container } from "reactstrap";
import "./testimonial.css";
import data from "./data";
import { useState } from "react";

const len = data.length - 1;
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prevD) => (prevD === len ? 0 : prevD + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const onclick = (activeIndex) => setActiveIndex(activeIndex);

  return (
    <Container>
      <div className="x-testimonials x-testimonials-carousel">
        <div id="testimonials" className="carousel slide">
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div
                className={
                  activeIndex === index ? "active carousel-item" : "inactive"
                }
                key={index}>
                <div className="x-testimonials-carousel__content">
                  <p>{item.description}</p>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={item.target}
                    className="x-testimonials-carousel__author">
                    <img src={item.scr} alt={`${item.text} logo`} />
                    <span className="x-testimonials-carousel__author-txt">
                      <span className="x-testimonials-carousel__author-txt1">
                        {item.text}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators x-carousel-indicators-dark">
            <Dots
              onclick={onclick}
              activeIndex={activeIndex}
              imageSlider={data}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
