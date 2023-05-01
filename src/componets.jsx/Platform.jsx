import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import diamand from "../assets/img/svg/diamand.svg";
import backyard from "../assets/img/svg/backyard.svg";
import worth from "../assets/img/svg/worth.svg";
import percent from "../assets/img/svg/percent.svg";
import green$ from "../assets/img/svg/green$.svg";
import goArrow from "../assets/img/svg/rigth-arrow.svg";
import eye from "../assets/img/svg/eye.svg";
import roi from "../assets/img/svg/roi.svg";
import notes from "../assets/img/svg/notes.svg";

function Platform() {
  return (
    <>
      <section id="platform" className="py-sm-4 pb-4 py-xl-5">
        <Container className="mt-xl-5">
          <Row className="d-none d-sm-flex">
            <div className="col-lg-3 p-0 px-1">
              <h2 className=" fw-semibold fs_4x5l text-black z_index1">
                Ours <span className="d-block"> Platform</span>
              </h2>
            </div>
            <div className="col-lg-9 p-0 px-1">
              <Row>
                {" "}
                <div className="col-sm-6 p-0 px-1">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between  mx-auto position-relative overflow-hidden">
                    <div className=" position-absolute overlay_over_cards"></div>
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl z_index1">
                        Exclusive
                      </h2>
                      <img style={{ width: "50px" }} src={diamand} alt="img" />
                    </div>
                    <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0 z_index1">
                      200 exclusive prospects{" "}
                      <span className="d-lg-block">
                        pushed to your platfrom
                      </span>{" "}
                      monthly.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 p-0 px-1 mt-4 mt-sm-0 overflow-hidden position-relative">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between overflow-hidden position-relative mx -auto">
                    <div className=" position-absolute overlay_over_cards"></div>
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl z_index1">
                        In your <span className=" d-block"> backyard</span>
                      </h2>
                      <img style={{ width: "50px" }} src={backyard} alt="img" />
                    </div>
                    <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0 z_index1">
                      Radius based leads within 50-miles from
                      <span className="d-lg-block">
                        you, prioritizing those closer to you.
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </Row>
            </div>
          </Row>
          <Row
            style={{ padding: "10px 0 0 0 " }}
            className="d-none d-sm-flex justify-content-center"
          >
            <div className="col-lg-9  p-0 px-1">
              <Row>
                {" "}
                <div className="col-sm-6 p-0 px-1 ">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between overflow-hidden position-relative mx-auto">
                    <div className=" position-absolute overlay_over_cards"></div>{" "}
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl z_index1">
                        High <span className="d-block"> net worth</span>
                      </h2>
                      <img style={{ width: "50px" }} src={worth} alt="img" />
                    </div>
                    <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0 z_index1">
                      Average investable assets of $1.5
                      <span className="d-lg-block">million.</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 p-0 px-1 pe-2 mt-4 mt-sm-0 ">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between overflow-hidden position-relative mx -auto">
                    <div className=" position-absolute overlay_over_cards"></div>{" "}
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl">
                        High <span className="d-block"> propensity</span>
                      </h2>
                      <img style={{ width: "50px" }} src={percent} alt="img" />
                    </div>
                    <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0">
                      Our combination of event-driven data,
                      <span className="d-xl-block">
                        historical data, behavioral analytics,
                      </span>{" "}
                      and real-time data results in the{" "}
                      <span className="d-xl-block">
                        highest propensity prospects.
                      </span>
                    </p>
                  </div>
                </div>
              </Row>
            </div>
            <div className="col-lg-3 col-12 p-0 ps-lg-2 mt-2 mt-lg-0">
              <div className="w-100 h-100 ">
                {" "}
                <div className="card_bg_img position-relative">
                  <div className="text_on_card position-absolute d-flex flex-column justify-content-end pe-xl-4">
                    <div className=" d-flex align-content-end justify-content-between pb-5 w-100 align-items-center ps-3 pe-4">
                      {" "}
                      <p
                        href="#"
                        className="fw-semibold fs_md text-white ps-4 mb-0 cursor_pointer"
                      >
                        View pricing
                      </p>
                      <a href="#">
                        {" "}
                        <img
                          className=""
                          style={{ width: "25px" }}
                          src={goArrow}
                          alt="arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row className="d-sm-none pb-2">
            <div className="col-lg-3 p-sm-0 px-sm-1">
              <h2 className="ps-sm-2 fw-semibold fs_4x5l text-black">
                Ours <span className="d-block"> Platform</span>
              </h2>
            </div>
          </Row>
          <Carousel className="d-sm-none rounded-2">
            <Carousel.Item className="rounded-2">
              <div className="col-sm-6 p-0 px-1 rounded-2">
                <div className="cards_bg py-md-5 py-3 px-md-5 rounded-2 px-3 d-flex flex-column justify-content-between  mx-auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl">Exclusive</h2>
                    <img style={{ width: "50px" }} src={diamand} alt="img" />
                  </div>
                  <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0 pb-2">
                    200 exclusive prospects{" "}
                    <span className="d-lg-block">pushed to your platfrom</span>{" "}
                    monthly.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1 ">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl">
                      In your backyard
                    </h2>
                    <img style={{ width: "50px" }} src={backyard} alt="img" />
                  </div>
                  <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0  pb-2">
                    Radius based leads within 50-miles from
                    <span className="d-lg-block">
                      you, prioritizing those closer to you.
                    </span>{" "}
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between  mx-auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl">
                      High <span className="d-block"> net worth</span>
                    </h2>
                    <img style={{ width: "50px" }} src={worth} alt="img" />
                  </div>
                  <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0  pb-2">
                    Average investable assets of $1.5
                    <span className="d-lg-block">million.</span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1 pe-2">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl">
                      High <span className="d-block"> propensity</span>
                    </h2>
                    <img style={{ width: "50px" }} src={percent} alt="img" />
                  </div>
                  <p className=" fw-normal fs_md text-black opacity_07 mb-0 mt-md-0  pb-2">
                    Our combination of event-driven data,
                    <span className="d-xl-block">
                      historical data, behavioral analytics,
                    </span>{" "}
                    and real-time data results in the{" "}
                    <span className="d-xl-block">
                      highest propensity prospects.
                    </span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <Row className="d-sm-none py-2 mx-1">
            <div className="col-lg-3 col-12 p-0 ps-lg-2 mt-2 mt-lg-0">
              <div className="w-100 h-100 ">
                {" "}
                <div className="card_bg_img position-relative">
                  <div className="text_on_card position-absolute d-flex flex-column justify-content-end pe-xl-4">
                    <div className=" d-flex align-content-end justify-content-between pb-4 w-100 align-items-center ps-3 pe-4">
                      {" "}
                      <p
                        href="#"
                        className="fw-semibold fs_md text-white ps-4 mb-0 cursor_pointer"
                      >
                        View pricing
                      </p>
                      <a href="#">
                        {" "}
                        <img
                          className=""
                          style={{ width: "25px" }}
                          src={goArrow}
                          alt="arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row className="mt-5 pt-5 d-none d-md-flex">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center h-100">
                <img style={{ width: "80px" }} src={eye} alt="eye-img" />
                <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                  Harness the power of 30 million data points to reach your
                  highest converting target market
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center h-100">
                <img style={{ width: "80px" }} src={roi} alt="eye-img" />
                <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                  Increase your marketingdollars{" "}
                  <span className="d-lg-block"> ROI</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center h-100">
                <img style={{ width: "80px" }} src={notes} alt="eye-img" />
                <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                  A top of funnel marketing solution to{" "}
                  <span className=" d-xl-block ">
                    fill your prospect pipeline
                  </span>
                </p>
              </div>
            </div>
          </Row>
          <Carousel className="d-md-none mt-4 slider_bottom">
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center"
                >
                  <img style={{ width: "80px" }} src={eye} alt="eye-img" />
                  <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                    Harness the power of 30 million data points to reach your
                    highest converting target market
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center"
                >
                  <img style={{ width: "80px" }} src={roi} alt="eye-img" />
                  <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                    Increase your marketingdollars{" "}
                    <span className="d-lg-block"> ROI</span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center"
                >
                  <img style={{ width: "80px" }} src={notes} alt="eye-img" />
                  <p className=" fw-normal fs_md text-black text-center mb-0 mt-2">
                    A top of funnel marketing solution to{" "}
                    <span className=" d-xl-block ">
                      fill your prospect pipeline
                    </span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Platform;
