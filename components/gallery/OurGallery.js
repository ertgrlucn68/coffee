import React from "react";
import style from "./style/OurGallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import Image from "next/image";
import slideImg from "./assets/item-1.png";
import slideImg2 from "./assets/item-2.png";
import slideImg3 from "./assets/item-3.png";
import slideImg4 from "./assets/item-4.png";
import slideImg5 from "./assets/item-5.png";
import slideImg6 from "./assets/item-6.png";
import slideImg7 from "./assets/item-7.png";
import slideImg8 from "./assets/item-8.png";
import slideImg9 from "./assets/item-9.png";
import slideImg10 from "./assets/item-10.png";
import slideImg11 from "./assets/item-11.png";
import slideImg12 from "./assets/item-12.png";
import slideImg13 from "./assets/item-13.png";
import slideImg14 from "./assets/item-14.png";
import slideImg15 from "./assets/item-15.png";
import slideImg16 from "./assets/item-16.png";
import slideImg17 from "./assets/item-17.png";
import slideImg18 from "./assets/item-18.png";
import slideImg19 from "./assets/item-19.png";
import slideImg20 from "./assets/item-20.png";
const OurGallery = () => {
  return (
    <div className={style.our_gallery}>
      <div className="container">
        <div className="col-12">
          <h2 className={style.title}>FEEL THE VIBE</h2>
          <Swiper
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={0}
            slidesPerView={3}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg2} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg3} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg4} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg5} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg6} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg7} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg8} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg9} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg10} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg11} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg12} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg13} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg14} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg15} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg16} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg17} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg18} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg19} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg20} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-2">
                <Image src={slideImg7} width={400} height={400} alt="slide" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={style.card_area}>
          <div className="row g-3">
            <div className="col-lg-6 col-md-12">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper text-center w-50"
              >
                <SwiperSlide>
                  <Image src={slideImg} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg2} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg3} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg4} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg5} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg6} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg7} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg8} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg9} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg10} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg11} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg12} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg13} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg14} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg15} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg16} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg17} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg18} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg19} width={400} height={400} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={slideImg20} width={400} height={400} alt="slide" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={style.card_content}>
                <h3 className={style.card_title}>
                  Explore the world of coffee CupZ
                </h3>
                <p className={style.card_text}>
                Have you ever seen such cute coffee cups? All even sweeter than Chocolate Mocha 😊 
                 
                 <p className={style.card_text}>A total of 3333 mintable NFTs with 8 amazing properties, 5 awesome 1/1 coffee cups and more than 250 traits are waiting for you.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
