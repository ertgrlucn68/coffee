import React from "react";
import style from "./style/Roadmap.module.css";
import Image from "next/image";
import roadImage from "./assets/item-1.png";
import roadImage2 from "./assets/item-2.png";
import roadImage3 from "./assets/item-3.png";
import roadImage4 from "./assets/item-4.png";
import roadImage5 from "./assets/item-5.png";
import {AnimationOnScroll} from "react-animation-on-scroll";
const Roadmap = () => {
  return (
    <div className={style.roadmap}>
      <div className="container">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className={style.roadmap_wrapper}>
          <h2 className={style.title}> Roadmap </h2>
          <div className="row g-3 align-items-center">
            <div
              className={`col-lg-4 ${style.text_align_first} col-md-6 ${style.order_first}`}
            >
              <Image src={roadImage} width={250} height={250} alt="road" />
            </div>
            <div className={`col-lg-8  col-md-6 ${style.order_second}`}>
              <div className={style.roadmap_content}>
                <h3 className={style.road_title}>
                  Phase 1: BECOME A SOLD OUT PROJECT !
                </h3>
                <p className={style.road_description}>
                  It all starts with our Art. We will create the most
                  high-quality sweet art that you have seen! We aim for
                  excellence! We will grab the attention of NFT communities
                  towards our high sweetness!
                </p>
              </div>
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className={`col-lg-8  col-md-6 ${style.order_second}`}>
              <div className={style.roadmap_content}>
                <h3 className={style.road_title}>
                  Phase 2: COMMUNITY REWARDS - INCREDIBLE ETH and NFT GIVEAWAYS
                </h3>
                <p className={style.road_description}>
                  We believe that the community will be responsible for our
                  success and therefore will be giving back to them! Depending
                  on how much funds were raised we are going to large portion
                  back to the community by running various giveaways, contests
                  with prizes and fun incentives to rewards all Coffee CupZ NFT
                  holders! Rewards can range from vacations, invitations to
                  parties, luxury goods or crypto rewards!
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 ${style.text_align_second} col-md-6 ${style.order_first}`}
            >
              <Image src={roadImage2} width={250} height={250} alt="road" />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div
              className={`col-lg-4 ${style.text_align_first} col-md-6 ${style.order_first}`}
            >
              <Image src={roadImage3} width={250} height={250} alt="road" />
            </div>
            <div className={`col-lg-8  col-md-6 ${style.order_second}`}>
              <div className={style.roadmap_content}>
                <h3 className={style.road_title}>Phase 3: COMMUNITY EVENTS</h3>
                <p className={style.road_description}>
                  We love and value our community very much. That&apos;s why we will
                  hold large and special events in various city centers around
                  the world that our community has decided upon. It is not
                  possible for us to meet all of you, but since we would like to
                  meet many of you, we leave it up to you to decide.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className={`col-lg-8  col-md-6 ${style.order_second}`}>
              <div className={style.roadmap_content}>
                <h3 className={style.road_title}>
                  Phase 4: Coffee CupZ WONDERLAND ON METAVERSE
                </h3>
                <p className={style.road_description}>
                  By purchasing land in the Metaverse (Sandbox, Decentraland
                  etc.) we will create our Coffee CupZ Wonderland. We will add
                  many games and functions inside our wonderland. Purchasing a
                  Coffee CupZ will create far more utility than a profile
                  picture. All Coffee CupZ NFTs are anticipated to be fully
                  functional in the Metaverse. You may use your Coffee CupZ NFT
                  in games, movies, or as your avatar in the metaverse. The
                  excellent detail in design means that your NFT is planned to
                  be fully deployable on multiple platforms without compromising
                  its quality.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 ${style.text_align_second} col-md-6 ${style.order_first}`}
            >
              <Image src={roadImage4} width={250} height={250} alt="road" />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div
              className={`col-lg-4 ${style.text_align_first} col-md-6 ${style.order_first}`}
            >
              <Image src={roadImage5} width={250} height={250} alt="road" />
            </div>
            <div className={`col-lg-8  col-md-6 ${style.order_second}`}>
              <div className={style.roadmap_content}>
                <h3 className={style.road_title}>
                  Phase 5: CHARITY DONATIONS AND Coffee CupZ MERCHANDISE
                </h3>
                <p className={style.road_description}>
                  We love any form of help. We will donate to charities (Save
                  The Children, International Rescue Committee etc.) that will
                  make our world a better place and support people. We will
                  design a beautiful merch collection that you will definitely
                  want to own and wear. We will distribute thousands of these
                  products by giveaways. But don&apos;t worry, we will also launch a
                  website where you can buy them.
                </p>
              </div>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Roadmap;
