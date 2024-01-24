import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image3 from "../../assets/images/Online shopping app- E-commerce app social media design.jpeg";
import Image4 from "../../assets/images/Online shopping app- E-commerce app social .jpeg";
import Image1 from "../../assets/images/Shipping9sa.jpeg"
const Images = {
  image1: Image1,
  image3: Image3,
  image4: Image4,
};
function Banner() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  return (
    <>
      <div   >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"

        >
           <SwiperSlide data-aos="slide-left" >
            <img src={Images.image1} alt="not found" />
          </SwiperSlide>
           <SwiperSlide data-aos="slide-up">
            <img src={Images.image3} alt="not found" />
          </SwiperSlide>
           <SwiperSlide data-aos="slide-right">
            <img src={Images.image4} alt="not found" />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
