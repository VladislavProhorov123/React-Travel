import React from "react";
import { REVIEWS } from "../../Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewList.css";

export default function ReviewList() {
  return (
    <div className="swiper  container">
      <div className="swiper-list">
        <div className="info-list">
          <h3>Testimonials</h3>
          <h2>What people say about Us.</h2>
        </div>
        <Swiper
          className="swiper-main"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
        >
          {REVIEWS.map((item) => (
            <SwiperSlide className="slide">
              <ReviewCard
                img={item.img}
                text={item.text}
                name={item.name}
                city={item.city}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
