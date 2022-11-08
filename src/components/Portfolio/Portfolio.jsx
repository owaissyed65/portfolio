import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const image = [
    {
      img: Sidebar
    },
    {
      img: Ecommerce
    },
    {
      img: HOC
    },
    {
      img: MusicApp
    }
  ]
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
        {
          image.map((portfolio,index)=>{
            return (<SwiperSlide key={index}>
              <img src={portfolio.img} alt="" />
            </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  );
};

export default Portfolio;
