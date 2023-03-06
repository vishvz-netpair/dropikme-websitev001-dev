import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import SectionTitle2 from "../SectionTitle2/SectionTitle2";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection2 = (props) => {
    return (
        <section className={`wpo-project-section-s2 section-padding ${props.pClass}`}>
            <div className="container">
                <SectionTitle2 subTitle={'OUR PORTFOLIO'} Title={'Successfull Work of Consoel'} />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12 sortable-project">
                        <div className="wpo-project-container project-slider owl-carousel">
                            <Slider {...settings}>
                                {Projects.slice(4, 9).map((project, prj) => (
                                    <div className="grid" key={prj}>
                                        <div className="wpo-project-item">
                                            <img src={project.pImg} alt="project" className="img img-responsive" />
                                            <div className="wpo-project-text">
                                                <span>{project.subTitle}</span>
                                                <h3><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}>{project.title}</Link></h3>
                                                <Link onClick={ClickHandler} className="arrow-btn" to={`/project-single/${project.Id}`}><i
                                                className="fi flaticon-right-arrow-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection2;