import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import SliderBtn from "./SliderBtn";

export default function Slider() {
  const [slideAnimation, setSlideAnimation] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (
      slideAnimation.index !== dataSlider.length &&
      !slideAnimation.inProgress
    ) {
      setSlideAnimation({ index: slideAnimation.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({
          index: slideAnimation.index + 1,
          inProgress: false,
        });
      }, 500);
    } else if (
      slideAnimation.index === dataSlider.length &&
      !slideAnimation.inProgress
    ) {
      setSlideAnimation({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({ index: 1, inProgress: false });
      }, 500);
    }
  };

  const prevSlide = () => {
    if (slideAnimation.index !== 1 && !slideAnimation.inProgress) {
      setSlideAnimation({ index: slideAnimation.index - 1, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({
          index: slideAnimation.index - 1,
          inProgress: false,
        });
      }, 500);
    } else if (slideAnimation.index === 1 && !slideAnimation.inProgress) {
      setSlideAnimation({ index: dataSlider.length, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({ index: dataSlider.length, inProgress: false });
      }, 500);
    }
  };

  const animDot = (index) => {
    setSlideAnimation({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((pic, index) => {
        return (
          <div
            key={pic.id}
            className={
              slideAnimation.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <SliderBtn moveSlide={nextSlide} direction={"next"} />
      <SliderBtn moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => {
          return (
            <button
              className={
                slideAnimation.index === index + 1 ? "dot active" : "dot"
              }
              onClick={() => animDot(index + 1)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
