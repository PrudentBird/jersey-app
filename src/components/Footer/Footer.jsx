import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer id="footer">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Ninestars</h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/terms">Terms of service</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/privacy">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/web-design">Web Design</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/web-development">Web Development</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/product-management">Product Management</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/marketing">Marketing</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="/graphic-design">Graphic Design</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="social-links mt-3">
                  <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                  <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                  <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                  <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                  <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Ninestars</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
