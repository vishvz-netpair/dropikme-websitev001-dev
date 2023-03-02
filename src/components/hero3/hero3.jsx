import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo/VideoModal";
import himg from "../../images/slider/right-img.jpg";
import shape1 from "../../images/slider/shape-1.png";
import shape2 from "../../images/slider/shape-2.png";
import shape3 from "../../images/slider/shape-3.png";

const Hero3 = () => {
  return (
    <section className="static-hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="hero-content">
              <div className="slide-title-sub">
                <h5>Trusted Business Partner.</h5>
              </div>
              <div className="slide-title">
                <h2>
                  Easy Your Business <span>Financial</span> Problem Solution.
                </h2>
              </div>
              <div className="slide-text">
                <p>It was popularised in the 1960s with the release sheets.</p>
              </div>
              <div className="clearfix"></div>
              <div className="btns">
                <Link to="/about" className="theme-btn">
                  Explore More
                </Link>
              </div>
              <div className="consult-pic">
                <img src={himg} alt="" />
              </div>
              <VideoModal />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape">
        <svg
          viewBox="0 0 737.000000 945.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,945.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M4824 9434 c4 -9 13 -55 21 -102 93 -534 -17 -1147 -305 -1699 -90
                -172 -170 -298 -290 -458 -316 -421 -611 -663 -1365 -1120 -351 -213 -568
                -353 -735 -474 -679 -493 -1192 -1112 -1652 -1991 -252 -481 -389 -966 -428
                -1515 -43 -612 74 -1330 322 -1973 l39 -102 1182 0 1181 0 -45 37 c-177 152
                -373 352 -495 509 -329 421 -532 944 -585 1507 -15 165 -6 593 15 737 104 693
                393 1375 823 1942 217 288 523 590 830 821 400 301 1195 738 2033 1116 331
                149 431 202 629 335 440 295 925 720 1262 1104 l109 124 0 609 0 609 -1276 0
                c-1174 0 -1276 -1 -1270 -16z"
            />
          </g>
        </svg>
      </div>
      <div className="hero-shape-2">
        <svg
          viewBox="0 0 229.000000 254.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,254.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M925 2439 c-237 -25 -533 -170 -687 -337 -182 -196 -220 -407 -111 -615 39 -74 153 -195 459 -488 229 -218 325 -386 409 -708 22 -86 58 -155 94 -180 104 -74 354 -29 548 98 163 108 278 247 397 481 126 247 179 489 156 717 -28 284 -142 527 -334 711 -95 91 -168 143 -283 201 -197 98 -436 143 -648 120z" />
          </g>
        </svg>
      </div>
      <div className="hero-line-shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="hero-line-shape-2">
        <img src={shape2} alt="" />
      </div>
      <div className="hero-line-shape-3">
        <img src={shape3} alt="" />
      </div>
    </section>
  );
};

export default Hero3;
