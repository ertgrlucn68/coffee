import React from "react";
import style from "./style/HomeAbout.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import slide from "./assets/slide-1.png";
import slide2 from "./assets/slide-2.png";
import slide3 from "./assets/slide-3.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const HomeAbout = () => {
  return (
    <div className={style.home_about}>
      <div className="container">
        <AnimationOnScroll animateIn="animate__backInLeft">
          <div className="row g-3">
            <div className="col-lg-5 col-md-6 col-12">
              <Swiper
                autoplay={{ delay: 2000 }}
                modules={[Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={slide} layout="responsive" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slide2} layout="responsive" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slide3} layout="responsive" alt="slide" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className={style.about_wrapper}>
                <h2 className={style.title}> About Our Collection </h2>
                <p className={style.description}>
                A collection of 3333 unique, hand drawn, ready-to-drink coffees that will take you for a journey on Web3 with their taste.. In the ETH Blockchain.
                </p>
                <p className={style.description}>
                We needed to produce a unique collection for unique people who love coffee. We did our best too. A total of 3333 mintable NFTs with 8 amazing properties, 5 awesome 1/1 coffee cups and more than 250 traits are waiting for you.
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default HomeAbout;
