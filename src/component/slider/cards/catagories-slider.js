import React from "react";
import Slider from "react-slick";
import Propslider from "./catagorieslider";

export default function SimpleSlider() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="slidersection pt-5">
        <div className="container">
          <div className="row" style={{ position: "relative" }}>
            <div className="sliderHeading">
              <div className="content text-center pb-5">
                <h1>Legal Services & Advisory</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                  non massa commodo.
                </p>
              </div>
            </div>
            <Slider {...settings}>
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-1.png")}
                categories="Business Health"
              />
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-2.png")}
                categories="Commercial Law"
              />
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-3.png")}
                categories="Employment Law"
              />
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-4.png")}
                categories="Property Law"
              />
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-5.png")}
                categories="Corporate Law"
              />
              <Propslider
                imgsrc={require("../../../assets/images/slider/slide-2.png")}
                categories="Eget Donec"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
