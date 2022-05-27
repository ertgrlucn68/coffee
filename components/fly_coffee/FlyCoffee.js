import React from 'react'
import style from "./style/FlyCoffee.module.css"
const FlyCoffee = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <div className={`${style.flyCoffee} ${isScrolled && style.scrolled_coffee}`}>
      <video className='w-100' autoPlay muted> 
        <source src="/flycoffee.webm" type="video/mp4" />
      </video>
    </div>
  )
}

export default FlyCoffee