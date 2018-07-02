// JavaScript source code
import React from "react";


const Navbar = () => (

    <div className="container-fluid pad-lg-0">
        <div className="row">
            <div className="col-lg-12 ">
                <div className="wpc-header-menu">
                    <div className="wpc-navigation">
                        <nav>
                            <ul className="main-menu">
                                <li className="menu-item menu-item-has-children">
                                    <a className="  active " href="">Home</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="index.html">home</a></li>
                                        <li className="menu-item"><a href="index2.html">home 2</a></li>
                                        <li className="menu-item"><a href="index3.html">home 3</a></li>
                                        <li className="menu-item"><a href="bakery-index.html">bakery</a></li>
                                        <li className="menu-item"><a href="bs-index.html">barbecue</a></li>
                                        <li className="menu-item"><a href="sushi-index.html">sushi</a></li>
                                        <li className="menu-item"><a href="pizzeria-index.html">pizzeria</a></li>
                                        <li className="menu-item"><a href="fast-food-index.html">fast food</a></li>
                                        <li className="menu-item"><a href="bistro-index.html">bistro</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a className="" href="">food menu</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item current-menu-item">
                                            <a href="food-menu.html">food menu</a>
                                        </li>
                                        <li className="menu-item current-menu-item">
                                            <a className="" href="food-menu2.html">food menu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a className="" href="recipes.html">recipes</a></li>
                                <li className="menu-item logo"><a href="index.html">Chicago</a></li>
                                <li className="menu-item menu-item-has-children">
                                    <a className="" href="">blog</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="blog.html">blog</a></li>

                                        <li className="menu-item"><a href="blog-details.html">blog details</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="#" className="">pages</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="about.html">about</a></li>
                                        <li className="menu-item"><a href="contact.html">contact</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a className="" href="reservation.html">reservation</a></li>
                            </ul>
                            <div className="nav-menu-icon"><i></i></div>
                        </nav>
                    </div>

                    <div className="wpt-menu-form ">
                        <form action="#">
                            <input type="text" />
                            <i className="flaticon-search"></i>
                        </form>
                    </div>

                    <div className="logo2"><a href="index.html">Chicago</a></div>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;