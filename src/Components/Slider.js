import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide1 from "../Assets/slide1.jpg";
import Slide2 from "../Assets/slide2.jpg";

const slides = [
  {
    id: 1,
    title: "At daybreak of the fifteenth day of my search",
    description:
      "When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay...",
    date: "FEBRUARY 1, 2019",
    comments: "4 COMMENTS",
    category: "FEATURED",
    image: Slide1,
  },
  {
    id: 2,
    title: "At daybreak of the fifteenth day of my search",
    description:
      "When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay...",
    date: "FEBRUARY 1, 2019",
    comments: "4 COMMENTS",
    category: "FEATURED",
    image: Slide2,
  },
  // Add more slides if needed
];

export default function Slider() {
  return (
    <Container className="p-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="swiper-container top-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slider-container"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Container>
                <Row className="align-items-center">
                  {/* Text Section */}
                  <Col md={6} className="p-4 text-white text-box">
                    <p className="text-muted">
                      {slide.date} • {slide.category} • {slide.comments}
                    </p>
                    <h2 className="text-black">{slide.title}</h2>
                    <p className="text-black">{slide.description}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
