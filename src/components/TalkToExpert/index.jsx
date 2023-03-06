import React from "react";
import Contact from "./contact";
import Services from "../../api/service";
import { Link } from "react-router-dom";

const TalkToExpert = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <>
      <div className="container section-padding">
        <div className="row">
          <div className="wpo-service-single-area col col-12 col-lg-6">
            <div className="container">
              <div className="row">
                <div className="wpo-service-single-wrap">
                  <div className="wpo-service-single-item">
                    <div className="wpo-service-contact-area">
                      <div className="wpo-contact-title">
                        <h2>Have project in mind? Let's discuss</h2>
                        <p>
                          Get in touch with us to see how we can help you with
                          your project
                        </p>
                      </div>
                      <div className="wpo-contact-form-area">
                        <Contact />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar col col-12 col-lg-6">
            <div className="widget category-widget">
              <h3>Post Categories</h3>
              <ul>
                {Services.slice(0, 6).map((service, Sitem) => (
                  <li key={Sitem}>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-single/${service.Id}`}
                    >
                      {service.sTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalkToExpert;
