import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/img/svg/footer-logo.svg";
import Upperarrow from "../assets/img/png/Uppperarrow.png";
import contact_bg_img from "../assets/img/png/contact us bg img.png";
function Footer() {
  return (
    <>
      <section className=" bg_Dark_Blue pt-md-4 pt-2 pt-md-4 pb-4 position-relative mx-xl-4 rounded-4">
        <img
          className=" position-absolute end-0 top-0 z_index-1"
          src={contact_bg_img}
          alt="contact_bg_img"
        />
        <Container className="">
          {" "}
          <div className="row border-1 my-lg-5 pb-lg-5 pb-4 align-items-center justify-content-between flex-column-reverse flex-md-row">
            <div className=" col-lg-8 col-md-6 px-xl-0 ">
              <div className="row me-xl-5">
                <div className="col-lg-6 pe-md-0 ">
                  <input
                    className="bg_primary outline_none px-3 rounded-1 py_custom w-100 fw-semibold fs_md text_gray"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="bg_primary outline_none px-3 rounded-1 py_custom w-100 fw-semibold fs_md text_greyLight mt-2"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="d-flex justify-content-sm-between justify-content-center gap-2 mt-2">
                    <a
                      className=" fw-semibold fs_md financial_btn px-1 px-sm-2  py_custom rounded-1 white_space w_lg_50 text-center"
                      href="#"
                    >
                      <svg
                        className="fill_dots pe-2"
                        width="25"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="#1AD079"
                        />
                      </svg>
                      <svg
                        className="pe-2 dots_show"
                        width="25"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                          fill="white"
                        />
                      </svg>
                      Financial Services
                    </a>
                    <a
                      className=" fw-semibold fs_md financial_btn px-xl-3 px-1 px-sm-2 px-lg-2 w-50  py_custom rounded-1 white_space w_lg_50 text-center"
                      href="#"
                    >
                      <svg
                        className="fill_dots pe-2"
                        width="25"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="#1AD079"
                        />
                      </svg>
                      <svg
                        className="pe-2 dots_show"
                        width="25"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                          fill="white"
                        />
                      </svg>
                      Real Estate
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea
                    className=" w-100 pt_cuztum pb-5 px-2 rounded-2 bg_primary outline_none fw-semibold fs_md text-white opacity_07 mt-4 mt-lg-0 "
                    cols="55"
                    rows="2"
                    placeholder="Message.."
                  ></textarea>

                  <a
                    className="py-3 bg_green w-100 d-inline-block text-center fw-semibold fs_md text-white rounded-1 submit_btn"
                    href="#"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-5 ps-xl-5">
              <h2 className=" fw-semibold fs_4xl text-white">Contact us</h2>
              <p className=" fw-normal fs_md text-white opacity_07 mt-lg-4">
                Our Predictive Analytics utilize a combination of event-driven
                data, historical data.
              </p>
            </div>
          </div>
        </Container>
        <div className="border_bottom"></div>
        <Container className="pb-2 ">
          <div className="row mt-md-5 mt-4">
            <div className="col-lg-4">
              <div className="d-flex flex-column">
                <span>
                  <a href="#">
                    <img src={logo} alt="footer-logo" />
                  </a>
                </span>
                <span className="mt-2">
                  <a
                    className=" fw-semibold fs_md text-white"
                    href="mailto:info@catalyzeai.com"
                  >
                    info@catalyzeai.com
                  </a>
                </span>
                <h2 className=" fw-semibold fs_md text-white mb-0">
                  (941) 867-1761
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <Row className=" mt-4 mt-lg-0">
                <div className="col-lg-3 col-5">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_md text-white" href="#">
                        {" "}
                        Financial Services
                      </a>
                    </span>
                    <span className="mt-2">
                      <a className=" fw-normal fs_md text-white" href="#">
                        Pricing
                      </a>
                    </span>
                    <span className="">
                      <a className=" fw-normal fs_md text-white" href="#">
                        Blog
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-4">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_md text-white" href="#">
                        {" "}
                        Real Estate
                      </a>
                    </span>
                    <span className="mt-2">
                      <a className=" fw-normal fs_md text-white" href="#">
                        Pricing
                      </a>
                    </span>
                    <span className="">
                      <a className=" fw-normal fs_md text-white" href="#">
                        Blog
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-3">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_md text-white" href="#">
                        {" "}
                        LinkedIn
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="d-flex justify-content-end align-items-center h-100">
                    <span>
                      <img src={Upperarrow} alt="" />
                    </span>
                  </div>
                </div>
              </Row>
            </div>
          </div>
          .
          <Row className=" mt-3">
            <div className="col-xl-6 col-lg-7">
              <div className="d-flex flex-column flex-sm-row justify-content-between ">
                <span className="text-center text-sm-start">
                  {" "}
                  <a className="text-white fw-normal fs_xsm opacity_07 mb-0">
                    All rights reserved. ©20022 Catalyze AI
                  </a>
                </span>
                <span>
                  {" "}
                  <a className="text-white fw-normal fs_xsm opacity_07 border-1 border-bottom mb-0 me-xl-4 px-2  cursor_pointer">
                    Do not sell my data
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="d-flex justify-content-lg-center justify-content-between gap-5 ps-lg-5 ms-lg-5 cursor_pointer">
                <span>
                  {" "}
                  <a className="text-white fw-normal fs_xsm opacity_07 border-1 border-bottom mb-0 px-2 ms-sm-4">
                    Terms & Conditions
                  </a>
                </span>
                <span>
                  {" "}
                  <a className="text-white fw-normal fs_xsm opacity_07  border-1 border-bottom  mb-0 cursor_pointer px-2">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
