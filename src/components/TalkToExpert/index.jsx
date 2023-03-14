import React from "react";
import Contact from "./contact";
import Services from "../../api/service";
import "./style.css";

const TalkToExpert = () => {
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
                        <h2>Request for Demo</h2>
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
              <h3>FAQs</h3>
              <ul className="accordion-wrap">
                {Services.slice(0, 6).map((service, Sitem) => (
                  <details key={Sitem} className="accordion-item">
                    <summary>
                      <h6>{service.sTitle}</h6>
                    </summary>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Facilis possimus rerum magni velit aliquid quod laboriosam
                      excepturi dolores nisi, quisquam, porro minus eum ad
                      tenetur necessitatibus cumque tempora! Beatae, corrupti.
                    </p>
                  </details>
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
