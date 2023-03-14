import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle/SectionTitle';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "I just wanted to share a quick note and let you know that you guys do a  really good job. I’m glad I decided to work with you. It’s really great how easy. One way to categorize the activities is in terms.",
        Title: 'Cathi Falcon',
        Sub: "Founder",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "I just wanted to share a quick note and let you know that you guys do a  really good job. I’m glad I decided to work with you. It’s really great how easy. One way to categorize the activities is in terms.",
        Title: 'Harry Abraham',
        Sub: "SCG First Company",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "I just wanted to share a quick note and let you know that you guys do a  really good job. I’m glad I decided to work with you. It’s really great how easy. One way to categorize the activities is in terms.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <SectionTitle subTitle={'CLIENT TESTIMONIAL'} Title={'Best Word Our Clients'} />
                            <div className="wpo-testimonial-items">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <p>“{tesmnl.Des}”</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <span>{tesmnl.Sub}</span>
                                                        <h3>{tesmnl.Title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="testimonial-right-side">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={tesmnl.tImg} alt="" />
                                            </div>
                                        ))
                                    }

                                </Slider>
                                <div className="video-holder">
                                    <VideoModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;