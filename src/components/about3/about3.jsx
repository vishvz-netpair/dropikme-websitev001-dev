import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/ab.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About3 = (props) => {
    return (
        <section className="wpo-about-section-s3 section-padding">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h4>Welcome To Consoel</h4>
                                <h2>We are trusted consulting company.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting’s
                                    the industrey's standard dummy text ever since the 1500 when printed
                                    galley of type and scrambled type specimen book.</p>
                                <div className="text-sub-wrap">
                                    <div className="text-sub-item">
                                        <i className="fi flaticon-tax"></i>
                                        <h5>Perfect solution of business
                                            and financial planning.</h5>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} className="theme-btn" to="/service">Our Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="shape-ab"></div>
                </div>
            </div>
        </section>
    )
}

export default About3;