import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = () => {
    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title-sub">
                                            <h5>Trusted Business Partner.</h5>
                                        </div>
                                        <div className="slide-title">
                                            <h2>The Fastest way to achieve success</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>It was popularised in the 1960s with the release sheets. We bring the right
                                                people together</p>
                                        </div>
                                        <div className="btns">
                                            <Link to="/about" className="theme-btn">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title-sub">
                                            <h5>Trusted Business Partner.</h5>
                                        </div>
                                        <div className="slide-title">
                                            <h2>Provide Financial Solution Service.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>It was popularised in the 1960s with the release sheets. We bring the right
                                                people together</p>
                                        </div>
                                        <div className="btns">
                                            <Link to="/about" className="theme-btn">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero2;