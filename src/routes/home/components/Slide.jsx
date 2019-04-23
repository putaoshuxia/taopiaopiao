import React from 'react';
import Slider from 'react-slick';
import './Slide.css'


const PosterSlide = ({data}) => {
    const setting = {
        dots:true,
        autoplay: true,
        className:'posterSlide',
        dotsClass:'posterSlide__dots'

    };

    return (
        <Slider {...setting}>
        {
            data.map(item => (
                <div key={item.id}>
                <img  className="posterSlide__image" src={item.image} alt="" />
                </div>
            ))
        }
        
            {/* <div>
                <img  className="posterSlide__image" src="/source/slide/slide1.jpeg" alt="" />
            </div>
            <div>
                <img className="posterSlide__image" src="/source/slide/slide2.jpeg" alt="" />
            </div>
            <div>
                <img className="posterSlide__image" src="/source/slide/slide3.jpeg" alt="" />
            </div>
            <div>
                <img className="posterSlide__image" src="/source/slide/slide4.jpeg" alt="" />
            </div>
            <div>
                <img className="posterSlide__image" src="/source/slide/slide5.jpeg" alt="" />
            </div> */}
        </Slider>
    );
}

export default PosterSlide;
