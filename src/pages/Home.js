import React from "react";
import "../components/Home/Home.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/Frame.png"
import aboutImg from "../assets/about-img.svg";

const Home = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Keep calm and love<br />football with Ninestars</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src={heroImg}
                className="img-fluid animated"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src={aboutImg}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
              ></img>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Voluptatem dignissimos provident quasi</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Check out the great services we offer</p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">
                  <Link to="/service1">Lorem Ipsum</Link>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">
                  <Link to="/service2">Sed ut perspiciatis</Link>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <Link to="/service3">Magni Dolores</Link>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-world"></i>
                </div>
                <h4 className="title">
                  <Link to="/service4">Nemo Enim</Link>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">
            <li>
              <div
                data-bs-toggle="collapse"
                className="collapsed question"
                href="#faq1"
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabxtur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq2"
                className="collapsed question"
              >
                Feugiat scelerisque varius morbx enim nunc faucibus a
                pellentesque? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habxtant morbx. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq3"
                className="collapsed question"
              >
                Dolor sit amet consectetur adipiscing elit pellentesque habxtant
                morbx? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbx quis
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq4"
                className="collapsed question"
              >
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habxtant morbx. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq5"
                className="collapsed question"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bxbendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                href="#faq6"
                className="collapsed question"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </div>
              <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  Pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus. Nibh tellus molestie nunc non
                  blandit massa enim nec.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
