import React from "react";
import Slider from "react-slick";
import UpcomingExperienceCard from "../../experience/UpcomingExperienceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpBooked from "../../experience/ExperienceBooked";

export default function FeedCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings} style={{}}>
      <ExpBooked />
    </Slider>
  );
}
