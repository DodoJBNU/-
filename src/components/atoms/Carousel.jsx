import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/atoms/Carousel.css";

const MyCarousel = () => {
  const img1 = "/image/carouselItem1.jpeg";
  const img2 = "/image/carouselItem2.jpeg";
  const img3 = "/image/carouselItem3.jpeg";
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="캐러셀 : 주방/생활가전 ~58% 특가, 대용량 퀵 파워워시 밀레 식기세척기 외"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="캐러셀 : 재구템 인기템만 한자리에! 육개장/진짜장 외 오뚜기 인기라면 특가"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="캐러셀 : 카카오페이 카드 15%할인 / LG전자 ~52% 특가 연말결산 세일"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
