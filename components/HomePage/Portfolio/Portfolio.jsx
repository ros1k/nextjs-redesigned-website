import React, { useContext } from 'react'
import style from './Portfolio.module.scss'
import SinglePortfolio from 'components/SinglePortfolio/SinglePortfolio';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StoreContext } from 'store/StoreProvider';
import FadeInWhenVisible from 'helpers/FramerMotion/FadeInWhenVisible';

const Portfolio = () => {
  const {portfolio} = useContext(StoreContext)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  };

   return (
      <div id="portfolio" className={style['section-portfolio']}>
         <div className={style['section-portfolio__header']}>
           <FadeInWhenVisible delay={0.3}>
              <h2 className={style['section-portfolio__title']}>my <span className="--green">projects</span></h2>
           </FadeInWhenVisible>
            
         </div>
         <div className={style['section-portfolio-content']}>
            <Slider {...settings}>
               {portfolio?portfolio.map((values,key)=>{
                     return <FadeInWhenVisible key={key} delay={key<4?`0.${key}`:0.1}><SinglePortfolio key={key} {...values}/></FadeInWhenVisible>
               }):null}
               </Slider>
         </div>
      </div>
   )
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
   
      onClick={onClick}
    >Next</div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    >Prev</div>
  );
}
export default Portfolio
