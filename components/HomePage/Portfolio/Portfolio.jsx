import React from 'react'
import style from './Portfolio.module.scss'
import SinglePortfolio from './SinglePortfolio/SinglePortfolio';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function NextArrow(props) {
   const { className, style, onClick } = props;
   console.log(style);
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


const Portfolio = ({portfolio}) => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
   return (
      <div className={style['section-portfolio']}>
         <div className={style['section-portfolio__header']}>
            <h2 className={style['section-portfolio__title']}>my <span className="--green">projects</span></h2>
         </div>
         <div className={style['section-portfolio-content']}>
            <Slider {...settings}>
               {portfolio.map((values,key)=>{
                     return <SinglePortfolio key={key} {...values}/>
               })}
               </Slider>
         </div>
      </div>
   )
}

export default Portfolio