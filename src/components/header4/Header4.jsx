import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderTopbar3 from "../HeaderTopbar3/HeaderTopbar3";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header4 = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={`wpo-header-style-3 ${props.topbarNone}`}>
      <HeaderTopbar3 />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/">
                    <img src={props.Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/features">Features</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/plan">Plan</Link>
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-search-interface-symbol"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header4;
