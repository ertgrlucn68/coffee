import React from "react";
import style from "./style/ToTop.module.css";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";
const ToTop = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <Link href="#">
      <a className={`${style.to_top} ${isScrolled && style.show_btn}`}>
        <AiOutlineArrowUp />
      </a>
    </Link>
  );
};

export default ToTop;
