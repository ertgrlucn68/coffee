import React from "react";
import style from "./style/Footer.module.css";
import Image from "next/image";
import { HiMail } from "react-icons/hi";
import opensea from "./assets/opensea.png";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className={style.contact_area}>
              <h3 className={style.contact_title}>Contact Us</h3>
              <div className={style.contact_list}>
                <h5 className={style.contact_list_title}>
                  Do you need help? Contact us.
                </h5>
              <div className="d-flex flex-column justify-content-center align-items-start">
              <a
                  href="mailto:contact@cuffeecupznft.com"
                  className={style.contact_list_link}
                >
                  <HiMail className={style.footer_icon} />{" "}
                  contact@cuffeecupznft.com
                </a>
                <a
                  href="mailto:contact@cuffeecupznft.com"
                  className={style.contact_list_link}
                >
                  <HiMail className={style.footer_icon} />{" "}
                  support@cuffeecupznft.com
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center col-12">
          <div className={style.contact_area}>
              <h3 className={style.contact_title}>Everyone loves coffee, do you?</h3>
              <div
              className={`d-flex align-items-center  justify-content-center ${style.social_area}`}
            >
              <a className={style.social_link} href="https://www.opensea.com/">
                <Image src={opensea} width="45" height="45" alt="opensea" />
              </a>
              <a className={style.social_link} href="https://discord.gg/coffeecupz">
                <FaDiscord className={style.social_icon} />
              </a>
              <a className={style.social_link} href="https://twitter.com/CoffeeCupZNFT">
                <FaTwitter className={style.social_icon} />
              </a>
              <a className={style.social_link} href="https://www.instagram.com/coffeecupznft/">
                <FaInstagram className={style.social_icon} />
              </a>
            </div>
              </div>
          </div>
        </div>
        <div className={style.footer_copyright}>
          <p className={style.copyright_title}> Copyright © 2022 Coffee CupZ NFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
