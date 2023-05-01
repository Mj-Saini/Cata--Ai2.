import React from "react";
import { Row } from "react-bootstrap";
import web from "../assets/img/svg/earth.svg";
import location from "../assets/img/svg/location.svg";
import map from "../assets/img/webp/map.webp";
import round from "../assets/img/webp/round-map.webp";

function Target() {
  return (
    <>
      <section id="Target" className="pt-xl-5 pb-md-5 my-md-5">
        <div className="container">
          .
          <Row className=" justify-content-between">
            <div className="col-lg-5 pb-md-4  pb-lg-0">
              <div>
                <h2 className=" ff_Seoge fw-semibold fs_4x5l text-black z_index1">
                  Your Target Market
                </h2>
                <p className=" ff_Seoge fw-normal fs_md text-black z_index1">
                  <img className="me-2" src={web} alt="icon" /> Nationwide
                  coverage
                </p>
                <p className=" ff_Seoge fw-normal text-black opacity_07 fs_md z_index1">
                  It is a long established fact that a reader will be{" "}
                  <span className="d-xl-block">
                    {" "}
                    distracted by the readable content of a page when
                  </span>{" "}
                  looking at its layout. The point of using Lorem Ipsum is{" "}
                  <span className="d-xl-block">
                    {" "}
                    that it has a more-or-less normal distribution of letters.
                  </span>
                </p>
                <span style={{}} className="mt-3 d-inline-block get_btn">
                  <a
                    className="text-white fw-normal fs_md text-center"
                    href="#"
                  >
                    Get started
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-5 mt-sm-5 mt-4 mt-lg-0 py-5 pt-lg-0">
              <div className=" position-relative">
                <div className="round_map position-absolute">
                  {" "}
                  <img
                    className="  round_map_img"
                    src={round}
                    alt="round-map"
                  />
                  <span className="position-absolute locator d-flex justify-content-center align-items-center ff_inter fw-normal fs_md text-white">
                    {" "}
                    <img className="me-2" src={location} alt="locator" />
                    Your leads
                  </span>
                </div>
                <img className="w-100" src={map} alt="map" />
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Target;
