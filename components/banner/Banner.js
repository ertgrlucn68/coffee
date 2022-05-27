import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style/Banner.module.css";
const Banner = () => {
  return (
    <section className={style.banner}>
      <div className="container">
        <div className="col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
          
              <Image
                src="/logo.png"
                alt="Coffee CupZ"
                width={800}
                height={800}
              />
            
            <div className={style.coffee_ball_area}>
              <Image
                src="/coffee_ball.gif"
                alt="Coffee CupZ"
                width={400}
                height={480}
              />
            </div>
            <h1 className={style.title}>12 June,2022 Mint One CupZ</h1>
            <Link href="/#">
              <a>
                <button className={style.button}>Mint One</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;