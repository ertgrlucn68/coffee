import 'bootstrap/dist/css/bootstrap.min.css'
import Script from "next/script";
import "styles/main.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "animate.css/animate.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Component {...pageProps} />{" "}
     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />{" "}
    </>
  );
}

export default MyApp;
