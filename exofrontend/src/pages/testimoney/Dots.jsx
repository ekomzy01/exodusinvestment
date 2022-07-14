import React from "react";

const Dots = ({ activeIndex, imageSlider, onclick }) => {
  return (
    <div className="all-dot ">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "dots active-dot num " : " num dots"
          }`}
          onClick={() => onclick(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
