import React from "react";
import style from "./style/Header.module.css";
import Link from "next/link";
import logo from "./assets/logo.png";
import Image from "next/image";
import opensea from "./assets/opensea.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import ToTop from "components/to_top/ToTop";
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link href="/">
            <a className={style.navbar_brand}>
              <Image src={logo} layout="responsive" alt="logo" />
            </a>
          </Link>
          <button
            className={`btn ${style.hamburger_btn}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <AiOutlineMenu className={style.hamburger_icon} />
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav mx-auto">
              <li className={style.navbar_item}>
                <Link href="/">
                  <a className={style.navbar_link}>Home</a>
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link href="/about-us">
                  <a className={style.navbar_link}>About Us</a>
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link href="/gallery">
                  <a className={style.navbar_link}>Gallery</a>
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link href="/about-team">
                  <a className={style.navbar_link}>About The Team</a>
                </Link>
              </li>
            </ul>
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
              <a
                className={style.social_link}
                href="https://www.instagram.com/coffeecupznft/"
              >
                <FaInstagram className={style.social_icon} />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <ToTop/>
    </header>
  );
};

export default Header;
