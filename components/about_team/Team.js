import React from "react";
import style from "./style/Team.module.css";
import Image from "next/image";
import Link from "next/link";
import personImg from "./assets/person-1.png";
import personImg2 from "./assets/person-2.png";
const Team = () => {
  return (
    <div className={style.team}>
      <div className="container">
        <div className={style.team_wrapper}>
          <h3 className={style.team_title}>ABOUT THE TEAM</h3>
          <div className="row g-3">
            <div className="col-md-6 text-center col-lg-3">
              <div className="d-flex justify-content-center align-items-center">
                <div className={style.team_img_wrapper}>
                  <Link href="https://www.instagram.com/revelinist/">
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        src={personImg}
                        width={225}
                        height={225}
                        alt="person"
                      />
                    </a>
                  </Link>
                  <div className={style.team_person_info}>
                    <h6 className={style.team_person_title}>
                      Name: Kaan Cakir
                    </h6>
                    <h6 className={style.team_person_title}>
                      Role: Founder, Creator
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-9">
              <div className={style.team_person_desc_wrapper}>
                <p className={style.team_person_desc}>
                  - Hello, I am Kaan Cakir. I am hardworking, funny and
                  passionate. I am an entrepreneur and traveller. I’ve been
                  interested in crypto since late 2017. I have been actively
                  involved in Ethereum NFTs since 2020. As I am an active
                  entrepreneur, I have knowledge and expertise in many financial
                  fields.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6 text-center col-lg-3">
              <div className="d-flex justify-content-center align-items-center">
                <div className={style.team_img_wrapper}>
                  <Link href="https://www.instagram.com/yunussuzum/">
                  <a target="_blank" className="text-center" rel="noopener noreferrer">
                      <Image
                        src={personImg2}
                        width={225}
                        height={225}
                        alt="person"
                      />
                    </a>
                  </Link>
                  <div className={style.team_person_info}>
                    <h6 className={style.team_person_title}>
                      Name: Yunus ÜZÜM
                    </h6>
                    <h6 className={style.team_person_title}>
                      Role: Creator, Head Admin & Developer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-9">
              <div className={style.team_person_desc_wrapper}>
                <p className={style.team_person_desc}>
                  - I am a tall, normal weight, 24 years old Yunus Üzüm. I
                  graduated from electrical and electronic engineering and I am
                  currently working on software in Istanbul. I started to be
                  interested in crypto in 2019 and and I&apos;ve been actively
                  involved since ETH NFTs came out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
