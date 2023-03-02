import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home4'
            },
            {
                id: 15,
                title: 'Home style 5',
                link: '/home5'
            },
            {
                id: 16,
                title: 'Home style 6',
                link: '/home6'
            },
            {
                id: 17,
                title: 'Home style 7',
                link: '/home7'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Service',
        link: '/service',
        submenu: [
            {
                id: 61,
                title: 'Service',
                link: '/service'
            },
            {
                id: 62,
                title: 'Service S2',
                link: '/service-s2'
            },
            {
                id: 63,
                title: 'Service S3',
                link: '/service-s3'
            },
            {
                id: 64,
                title: 'Service single',
                link: '/service-single/1'
            },
        ]
    },
    {
        id: 7,
        title: 'Project',
        link: '/project',
        submenu: [
            {
                id: 71,
                title: 'Project',
                link: '/project'
            },
            {
                id: 72,
                title: 'Project S2',
                link: '/project-s2'
            },
            {
                id: 73,
                title: 'Project S3',
                link: '/project-s3'
            },
            {
                id: 74,
                title: 'Project single',
                link: '/project-single/1'
            },
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Team',
                link: '/team'
            },
            {
                id: 322,
                title: 'Team Single',
                link: '/team-single/1'
            },
            {
                id: 371,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 375,
                title: 'Shop Single',
                link: '/product-single/1'
            },
            {
                id: 376,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 377,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 33,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 34,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 35,
                title: 'Login',
                link: '/login'
            },
            {
                id: 36,
                title: 'Register',
                link: '/register'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/1'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/1'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/1'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;