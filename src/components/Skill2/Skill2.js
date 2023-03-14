import React from 'react'
import Fade from 'react-reveal/Fade';
import shape1 from '../../images/progress-shape-1.png';
import shape2 from '../../images/progress-shape-2.png';

const Skill2 = (props) => {
    return (
        <section className="wpo-skill-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-skill-text">
                            <h5>Our Professional Skill’s</h5>
                            <h2>Professional Skill of <span>Consoel.</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="wpo-skill-progress">
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Investment</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${75}%` }} aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">75%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Business Analysis</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.7s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${80}%` }} aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">80%</span>
                            </div>

                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Tax Management</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="0.9s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${85}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">85%</span>
                            </div>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Financial Advices</h5>
                                <div className="progress">
                                    <Fade left>
                                        <div className="progress-bar" data-wow-duration="1.1s"
                                            data-wow-delay=".3s" role="progressbar" style={{ width: `${95}%` }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </Fade>
                                </div>
                                <span className="progress-number">95%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pr-shape-1"><img src={shape1} alt=""/></div>
            <div className="pr-shape-2"><img src={shape2} alt=""/></div>
        </section>
    )
}

export default Skill2;