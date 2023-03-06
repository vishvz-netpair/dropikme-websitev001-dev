import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from '../../api/service'
import smg1 from '../../images/service/shape-2.png'
import smg2 from '../../images/service/shape-3.png'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS3 = () => {
    return (
        <section className="wpo-service-section-s4 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Our Services'} Title={'What We Do?'} />
                <div className="row">
                    {Services.map((service, srv) => (
                        <div className="col-lg-6 col-md-12 col-12" key={srv}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <i className={`fi ${service.icon}`}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{service.sTitle}</h2>
                                        <p>{service.description}</p>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>Details</Link>
                                    </div>
                                </div>
                                <div className="shape-1"><img src={smg1} alt="" /></div>
                                <div className="shape-2"><img src={smg2} alt="" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS3;