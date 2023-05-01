import React from "react";
import property1 from "../assets/img/webp/property1.webp";
import property2 from "../assets/img/webp/property2.webp";
import property3 from "../assets/img/webp/property3.webp";
import green_shadow from "../assets/img/png/shadow-green2.png";
import { Carousel } from "react-bootstrap";

function ServiceSell() {
  return (
    <>
      <section
        id="Service"
        className=" pt-xl-5 py-4 z_index_4 position-relative"
      >
        <img
          className=" position-absolute z_index-1 green_shadow_right"
          src={green_shadow}
          alt="green_shadow"
        />
        <div className="container z_index_4 position-relative">
          <h2 className=" text-center fw-semibold fs_4x5l  mx-auto z_index_4 position-relative">
            Identify Inherited Properties in your{" "}
            <span className="d-lg-block">local area that will sell</span>
          </h2>
          <div className="row mt-md-5 pt-3">
            <div className=" col-md-3">
              <p className=" fw-normal fs_xl text-black mb-0 px-xl-5 px-sm-3 px-5 text-center">
                Industry High Prediction Rate
              </p>
            </div>
          </div>
          <div className="row justify-content-md-between justify-content-center mt-sm-3 ">
            <div className="col-md-3 col-sm-6">
              <div className="text-center h-100 d-flex flex-column justify-content-between">
                <h2 className=" fw-semibold fs_4xl text-black mb-0 mt-3 mt-md-0">
                  40%
                </h2>
                <div className="d-flex justify-content-center">
                  <img
                    className="w_xsm_75 w_md_100  mt-3 mt-md-0"
                    src={property1}
                    alt="properties"
                  />
                </div>
                <p className=" fw-normal fs_md text-black mb-0 mt-3 mt-md-0">
                  Roughly 4 out of 10 property leads sell within 12 months.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-4 mt-sm-0">
              <div className="text-center h-100 d-flex flex-column justify-content-between mt-4 mt-sm-0">
                <h2 className=" fw-semibold fs_4xl text-black mb-0 mt-3">
                  $77Bn
                </h2>
                <div className="d-flex justify-content-center">
                  <img
                    className="w_xsm_75 w_md_100 mt-3 mt-md-0"
                    src={property2}
                    alt="property"
                  />
                </div>
                <p className=" fw-normal fs_md text-black mb-0">
                  Predicted total property value that will sell per year.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-4 mt-sm-0">
              <div className="text-center h-100 d-flex flex-column justify-content-between mt-5 mt-md-0">
                <h2 className=" fw-semibold fs_4xl text-black mb-0">77%</h2>
                <div className="d-flex justify-content-center">
                  <img
                    className=" w_xsm_75 w_md_100 mt-md-4"
                    src={property3}
                    alt="properties "
                  />
                </div>
                <p className=" fw-normal fs_md text-black mb-0 mt-md-4">
                  Of recent seller contacted only one agent before finding the
                  right agent they worked with to sell their home.
                </p>
              </div>
            </div>
          </div>
          {/* <Carousel className="d-sm-none mt-4">
            <Carousel.Item>
              {" "}
              <div className="col-md-3 col-sm-6">
                <div
                  style={{ height: "325px" }}
                  className="text-center d-flex flex-column"
                >
                  <h2 className=" fw-semibold fs_4xl text-black mb-0 ">40%</h2>
                  <div className="d-flex justify-content-center">
                    <img
                      className="w_xsm_50 w_md_100  mt-3 mt-md-0"
                      src={property1}
                      alt="properties"
                    />
                  </div>
                  <p className=" fw-normal fs_md text-black mb-0 mt-4">
                    Roughly 4 out of 10 property leads sell within 12 months.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-3 col-sm-6">
                <div
                  style={{ height: "325px" }}
                  className="text-center d-flex flex-column "
                >
                  <h2 className=" fw-semibold fs_4xl text-black mb-0">$77Bn</h2>
                  <div className="d-flex justify-content-center">
                    <img
                      className="w_xsm_50 w_md_100 mt-3 mt-md-0"
                      src={property2}
                      alt="property"
                    />
                  </div>
                  <p className=" fw-normal fs_md text-black mb-0 mt-4 mt-3">
                    Predicted total property value that will sell per year.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-3 col-sm-6">
                <div
                  style={{ height: "325px" }}
                  className="text-center d-flex flex-column mt-md-0"
                >
                  <h2 className=" fw-semibold fs_4xl text-black mb-0">77%</h2>
                  <div className="d-flex justify-content-center">
                    <img
                      className=" w_xsm_50"
                      src={property3}
                      alt="properties "
                    />
                  </div>
                  <p className=" fw-normal fs_md text-black mb-0 mt-4 mt-md-4">
                    Of recent seller contacted only one agent before finding the
                    right agent they worked with to sell their home.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel> */}
          <div className="w-100 border_line mt-5 pt-4"></div>
        </div>
      </section>
    </>
  );
}

export default ServiceSell;
