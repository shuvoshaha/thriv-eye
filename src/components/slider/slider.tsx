import React from 'react'
import Sliders from "react-slick";
 import { SliderList } from './model';
 import { Link } from 'react-router-dom';
 import './slider.scss'

const Slider: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        lazyLoad: true,
        speed: 300,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      };

  return (
    <div className='te__slider'>
        <Sliders {...settings}>
            {
                SliderList.map((item: any, idx) =>  {
                    return  <div key={idx} className='te__slider-image'>
                    <Link to="/slider">

                    <img src={item.origin} className='slider__item' alt='te-slider' />
                    </Link>
                  </div>
                })
            }
         
        </Sliders>
    </div>
  )
}

export default Slider