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
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
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
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/home">
                            Home style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home2">
                            Home style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home3">
                            Home style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home4">
                            Home style 4
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home5">
                            Home style 5
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home6">
                            Home style 6
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home7">
                            Home style 7
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/service">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/service">
                            Service Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/service-s2">
                            Service Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/service-s3">
                            Service Style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/service-single/1">
                            Service Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/service">Project</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/project">
                            Project Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/project-s2">
                            Project Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/project-s3">
                            Project Style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/project-single/1">
                            Project Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/project">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/team">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/team-single/1">
                            Team single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/shop">
                            Shop Page
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/shop-single">
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">
                            404 Error
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/register">
                            Register
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/blog">
                        Blog
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single/1">
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-left-sidebar/1"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-fullwidth/1"
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
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
