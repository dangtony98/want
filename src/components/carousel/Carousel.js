import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            infinite: true,
        } 

        return (
            <div className="carousel marg-t-sm">
                <Slider {...settings}>
                    <div className="carousel__tab">
                        <div className="carousel__content">
                            <h1 className="landing-heading">
                                Your Picks
                            </h1>
                            <h4 className="want-text marg-t-sm">
                                A selection of nearby Wants tailored to your skills and interests → 
                            </h4>
                        </div>
                    </div>
                    <div className="carousel__tab">
                        <div className="carousel__content">
                            <h1 className="landing-heading">
                                School
                            </h1>
                            <h4 className="want-text marg-t-sm">
                                A selection of nearby Wants based on your classes →
                            </h4>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}