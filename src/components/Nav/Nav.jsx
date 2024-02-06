import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <h1 className="text-light"><Link to="/"><span>Ninestars</span></Link></h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="nav-link scrollto active">Home</Link></li>
              <li><Link to="/about" className="nav-link scrollto">About Us</Link></li>
              <li><Link to="/services" className="nav-link scrollto">Services</Link></li>
              <li><Link to="/portfolio" className="nav-link scrollto">Portfolio</Link></li>
              <li><Link to="/team" className="nav-link scrollto">Team</Link></li>
              <li className="dropdown">
                <Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to="#">Drop Down 1</Link></li>
                  <li className="dropdown">
                    <Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                    <ul>
                      <li><Link to="#">Deep Drop Down 1</Link></li>
                      <li><Link to="#">Deep Drop Down 2</Link></li>
                      <li><Link to="#">Deep Drop Down 3</Link></li>
                      <li><Link to="#">Deep Drop Down 4</Link></li>
                      <li><Link to="#">Deep Drop Down 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Drop Down 2</Link></li>
                  <li><Link to="#">Drop Down 3</Link></li>
                  <li><Link to="#">Drop Down 4</Link></li>
                </ul>
              </li>
              <li><Link to="/contact" className="nav-link scrollto">Contact</Link></li>
              <li><Link to="/about" className="getstarted scrollto">Get Started</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Nav;
