import React from "react";
import style from "./style/About.module.css";
import Image from "next/image";
import aboutImg from "./assets/about.gif";
const About = () => {
  return (
    <div className={style.about_us}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6 col-md-6 col-12">
            <Image src={aboutImg} width={500} height={500} alt="about" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h3 className={style.about_us_title}>About Us</h3>
            <p className={style.about_us_text}>
              
Everyone loves coffee, right? We wanted coffee lovers to take their place in the blockchain world. Thus, Coffee CupZ was born. Since we think that coffee is not to be drunk alone, we give 1 NFT for every 1 NFT purchased. You can share your NFT just like you share your coffee with a friend.
            </p>
            <p className={style.about_us_text}>
            As a coffee lover, take your place in the NFT world and show everyone your love for coffee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
