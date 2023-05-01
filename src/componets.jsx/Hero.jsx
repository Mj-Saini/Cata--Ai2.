import React from "react";
import mainCard from "../assets/img/webp/main-card.webp";
import overview from "../assets/img/svg/overview.svg";
import mikeCard from "../assets/img/svg/mike-card.svg";
import search from "../assets/img/svg/search.svg";
import shodow from "../assets/img/png/green-shadow.png";
import bshadow from "../assets/img/png/blue-shadow.png";
import Header from "./Header";

function Hero() {
  return (
    <>
      <section
        id="Hero"
        className=" position-relative min_vh_80 d-flex flex-column "
      >
        <Header />
        <img
          className="position-absolute z_index-1 green_shadow"
          src={shodow}
          alt="shadow"
        />
        <img
          className="position-absolute z_index-1 blue_shadow"
          src={bshadow}
          alt="shadow"
        />

        <div className="container mt-lg-5 d-flex flex-column flex-grow-1 align-items-center justify-content-center py-lg-5 py-sm-4 py-2">
          <div className="row justify-content-between mb-xl-4">
            <div className="col-xl-5 col-lg-6 ">
              <h1 className="ff_Seoge fs_6xl fw-semibold text-black text-center text-lg-start">
                Event-Driven Listing Leads
              </h1>
              <p className=" ff_Seoge fs_md fw-semibold text-black text-center text-lg-start">
                Not your average smart farming, not statistical analysis, but
                actionable behaviors.
              </p>
              <div className="pt-lg-5 mt-4 d-flex justify-content-center gap-1 justify-content-lg-start">
                <span className="me-sm-3 mt-2">
                  <a
                    className="hero_btn1  d-inline-block ff_Seoge fs_md fw-semibold text_green"
                    href="#"
                  >
                    Get started
                  </a>
                </span>
                <span className="me-sm-3 mt-2">
                  <a
                    href="#"
                    className="hero_btn d-inline-block ff_Seoge fs_md fw-semibold text_green"
                  >
                    Book a demo{" "}
                    <svg
                      className="ms-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_270_243)">
                        <path
                          d="M8.5 7.53347V16.0665C8.49997 16.1614 8.52527 16.2546 8.57327 16.3365C8.62127 16.4183 8.69024 16.4859 8.77307 16.5322C8.8559 16.5785 8.94958 16.6019 9.04446 16.5999C9.13933 16.5979 9.23195 16.5706 9.31278 16.5209L16.2459 12.2544C16.3235 12.2067 16.3877 12.1399 16.4322 12.0603C16.4766 11.9808 16.5 11.8911 16.5 11.8C16.5 11.7089 16.4766 11.6192 16.4322 11.5397C16.3877 11.4602 16.3235 11.3933 16.2459 11.3456L9.31278 7.07908C9.23195 7.02936 9.13933 7.0021 9.04446 7.00012C8.94958 6.99813 8.8559 7.0215 8.77307 7.06781C8.69024 7.11411 8.62127 7.18168 8.57327 7.26354C8.52527 7.34539 8.49997 7.43857 8.5 7.53347Z"
                          fill="#1AD079"
                        />
                      </g>
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="#1AD079"
                      />
                      <defs>
                        <clipPath id="clip0_270_243">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mt-sm-5 mt-4 mt-lg-0 mb-sm-5 mb-3 ">
              <div className=" d-inline-block position-relative">
                <img
                  className=" position-absolute overview_posi"
                  src={overview}
                  alt="card-img"
                />
                <img
                  className=" position-absolute mike_card"
                  src={mikeCard}
                  alt="card-img"
                />
                <img
                  className=" position-absolute input_card"
                  src={search}
                  alt="card-img"
                />
                <img className="w-100" src={mainCard} alt="card-img" />
              </div>
            </div>
          </div>
          <div className="w-100 border_line mt-lg-5 pt-xl-5 mt-3"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
