import React from "react";
import home from "../assets/img/webp/home.webp";
import Polygong from "../assets/img/svg/polygen-g.svg";
import Polygonl from "../assets/img/svg/polygen-l.svg";
import triangle from "../assets/img/svg/trangle.svg";
import play from "../assets/img/svg/play.svg";

function Deals() {
  return (
    <>
      <section id="Deal" className=" py-md-5 py-4 py-xl-0 d-flex min_vh_80">
        <div className="container flex-grow-1 justify-content-center d-flex align-items-center">
          <div className="row justify-content-sm-between justify-content-center">
            <div className="col-lg-4   ">
              <div className="d-flex justify-content-center">
                <img className=" w-100" src={home} alt="home-img" />
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-8 mt-4 mt-lg-0">
              <div className=" pe-xl-5 mt-sm-4 mt-lg-0">
                <p className=" fw-normal fs_md text_black mb-0">
                  Leverage big data and artificial intelligence to identify your
                  next Client
                </p>
                <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-4 pb-2">
                  Compliment your current business development with
                  Unconstrained predictive analytics.
                </p>
                <div className="bg-white ms-3 shadow rounded-2 py-3 px-4 mt-sm-5 mt-3 position-relative">
                  <img
                    className="tangle_btn_position "
                    src={triangle}
                    alt="img"
                  />
                  <div className="d-flex align-items-center">
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 0L22.3253 6.25V18.75L11.5 25L0.674683 18.75V6.25L11.5 0Z"
                        fill="#1ad079"
                      />
                    </svg>

                    <p className=" mb-0 fw-normal fs_md text_dark_gray ms-3 ps-1">
                      Unconstrained
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3 polygun">
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 0L22.3253 6.25V18.75L11.5 25L0.674683 18.75V6.25L11.5 0Z"
                        fill="#E4F9EF"
                      />
                    </svg>

                    <p className=" mb-0 fw-normal fs_md text_dark_gray ms-3 ps-1">
                      Constrained
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-4 col-8 mt-4 mt-lg-0 ">
              <div className="h-100 d-flex flex-column justify-content-sm-between align-items-center py-3 mt-sm-4 mt-lg-0">
                <h2 className=" fw-semibold fs_4x5l text-black mb-0">
                  Close <span className="d-md-block">More</span> Deals
                </h2>

                <a
                  className="d-flex primary_btn align-items-center ms-md-5 mt-2 mt-sm-0 px-2 py-2"
                  href="#"
                >
                  <a className=" fw-semibold fs_md text_green " href="#">
                    Book a demo
                  </a>
                  <a className=" ms-3" href="#">
                    <img src={play} alt="play-btn" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
