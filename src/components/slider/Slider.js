import React, { Component } from 'react';
import CustomSlider from 'react-slick';

const NextArrow = ({ onClick }) => (
    <button
        className="slider__arrow--right"
        onClick={onClick}
    >
        <i className="icon-chevron fas fa-chevron-right"></i>
    </button>
);

export default class Slider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <div />
        } 

        return (
            <div className="slider marg-t-sm">
                <CustomSlider {...settings}>
                    <div 
                        className="slider__tab slider__tab--1"
                    >
                        <div className="slider__tab--content">
                            <h1 className="slider-text">
                                Popular
                            </h1>
                            <h3 className="slider-text marg-t-sm">
                                Nearby Wants based on most bookmarked
                            </h3>
                        </div>
                    </div>
                    <div className="slider__tab slider__tab--2">
                        <div className="slider__tab--content">
                            <h1 className="slider-text">
                                School
                            </h1>
                            <h3 className="slider-text marg-t-sm">
                                Nearby Wants based on your classes
                            </h3>
                        </div>
                    </div>
                </CustomSlider>
            </div>
        );
    }
}