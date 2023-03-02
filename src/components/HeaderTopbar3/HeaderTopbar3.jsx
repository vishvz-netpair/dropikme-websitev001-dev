import React from 'react'
import {Link}  from 'react-router-dom'


const HeaderTopbar3 = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-9 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call-1"></i>(00) 0431 275 490</li>
                                <li><i className="fi flaticon-email-1"></i>support24@gmail.com</li>
                                <li><i className="fi flaticon-location"></i> Roberts Avenue, Chattanooga.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-12">
                        <div className="contact-info">
                           <Link className='theme-btn' to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar3;