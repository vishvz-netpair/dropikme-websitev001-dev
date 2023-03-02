import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import shape1 from '../../images/page-title-shape-1.png'
import shape2 from '../../images/page-title-shape-2.png'

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <div className="page-inner-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h2>{props.pageTitle}</h2>
                            <ol className="breadcrumb">
                                <li><Link to="/home">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Fade top>
                    <div className="page-title-shape-1"></div>
                </Fade>
                <Fade top>
                    <div className="page-title-shape-2">
                        <img src={shape1} alt="" />
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="page-title-shape-3">
                        <img src={shape2} alt="" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default PageTitle;