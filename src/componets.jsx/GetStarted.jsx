import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import started2 from "../assets/img/webp/started-img.webp";
import started from "../assets/img/webp/started2.webp";
import started3 from "../assets/img/webp/started3.webp";
import started4 from "../assets/img/webp/started4.webp";

function GetStarted() {
  const [activeTab, setActiveTab] = useState("get2");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="py-md-5 pt-4 pt-md-0">
        <div className=" bg_Dark_Blue rounded-4 py-md-5 pt-4 ">
          <div className="container">
            {" "}
            <h2 className=" ff_Seoge text-center py-md-4 fw-semibold fs_4x5l text-white">
              How to get started?
            </h2>
            <div className="row align-items-center position-relative">
              <div className="col-lg-6">
                <Accordion defaultActiveKey={["1"]}>
                  <Accordion.Item
                    eventKey="0"
                    className={
                      activeTab === "get1 "
                        ? "Active rounded-3 py-0"
                        : "my-4 rounded-3"
                    }
                    onClick={() => handleTabClick("get1")}
                  >
                    <Accordion.Header>
                      <svg
                        className="mt-2"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          className={
                            activeTab === "get1 "
                              ? "fill_green  rounded-3 py-0"
                              : ""
                          }
                          width="40"
                          height="40"
                          rx="4"
                          fill=""
                        />
                        <path
                          d="M21.8047 15.5469V27H19.9922V17.7656C19.6641 18 19.3099 18.2005 18.9297 18.3672C18.5547 18.5286 18.125 18.6719 17.6406 18.7969V17.25C17.9427 17.151 18.2344 17.0469 18.5156 16.9375C18.7969 16.8281 19.0729 16.7057 19.3438 16.5703C19.6198 16.4349 19.8958 16.2839 20.1719 16.1172C20.4531 15.9505 20.7422 15.7604 21.0391 15.5469H21.8047Z"
                          fill="white"
                        />
                      </svg>

                      <p className="ps-sm-5 ps-3 ff_Seoge fw-semibold fs_2x4l text-white mb-0">
                        Provide your information
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className=" rounded-bottom">
                      <p className="ps-sm-5 ps-3 ms-3 ff_Seoge fw-normal fs_md text-white opacity_07 mb-0">
                        Provide a zip code and we will provide you with the
                        highest propensity prospects in a 50 mile radius.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className={activeTab === "get2" ? " Active" : "my-4 "}
                    onClick={() => handleTabClick("get2")}
                  >
                    <Accordion.Header className=" rounded-top">
                      <svg
                        className="mt-2 "
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="4" fill="#1AD079" />
                        <path
                          d="M23.7969 27H16.7656V26.1328C16.7656 25.7786 16.8151 25.4479 16.9141 25.1406C17.013 24.8281 17.1458 24.5365 17.3125 24.2656C17.4792 23.9896 17.6745 23.7318 17.8984 23.4922C18.1224 23.2474 18.362 23.013 18.6172 22.7891C18.8724 22.5599 19.1328 22.3411 19.3984 22.1328C19.6641 21.9193 19.9245 21.7057 20.1797 21.4922C20.4193 21.2891 20.638 21.0911 20.8359 20.8984C21.0339 20.7005 21.2031 20.4974 21.3438 20.2891C21.4844 20.0807 21.5938 19.862 21.6719 19.6328C21.75 19.3984 21.7891 19.1458 21.7891 18.875C21.7891 18.5781 21.7422 18.3203 21.6484 18.1016C21.5599 17.8776 21.4323 17.6927 21.2656 17.5469C21.1042 17.3958 20.9115 17.2839 20.6875 17.2109C20.4635 17.1328 20.2188 17.0938 19.9531 17.0938C19.4948 17.0938 19.0286 17.2005 18.5547 17.4141C18.0807 17.6276 17.625 17.9479 17.1875 18.375V16.6328C17.4167 16.4609 17.6484 16.3125 17.8828 16.1875C18.1172 16.0573 18.3594 15.9505 18.6094 15.8672C18.8594 15.7786 19.1224 15.7135 19.3984 15.6719C19.6745 15.6302 19.9688 15.6094 20.2812 15.6094C20.7865 15.6094 21.2448 15.6771 21.6562 15.8125C22.0677 15.9427 22.4193 16.138 22.7109 16.3984C23.0026 16.6536 23.2266 16.974 23.3828 17.3594C23.5443 17.7448 23.625 18.1875 23.625 18.6875C23.625 19.1406 23.5677 19.5495 23.4531 19.9141C23.3438 20.2734 23.1849 20.6094 22.9766 20.9219C22.7734 21.2344 22.526 21.5312 22.2344 21.8125C21.9427 22.0938 21.6172 22.3828 21.2578 22.6797C20.9557 22.9245 20.6536 23.1641 20.3516 23.3984C20.0547 23.6276 19.7865 23.8542 19.5469 24.0781C19.3073 24.2969 19.112 24.5182 18.9609 24.7422C18.8151 24.9609 18.7422 25.1823 18.7422 25.4062V25.4453H23.7969V27Z"
                          fill="white"
                        />
                      </svg>
                      <p className="ps-sm-5 ps-3 ff_Seoge fw-semibold fs_2x4l text-white mb-0">
                        Select your location
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className=" rounded-bottom">
                      <p className="ps-sm-5 ps-3 ms-3 ff_Seoge fw-normal fs_md text-white opacity_07 mb-0">
                        Provide a zip code and we will provide you with the
                        highest propensity prospects in a 50 mile radius.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className={activeTab === "get3" ? " Active" : "my-4 "}
                    onClick={() => handleTabClick("get3")}
                    y
                    eventKey="2"
                  >
                    <Accordion.Header>
                      <svg
                        className="mt-2"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="4" fill="#141F45" />
                        <path
                          d="M16.9609 26.5859V24.8828C17.6901 25.4609 18.513 25.75 19.4297 25.75C20.1745 25.75 20.7682 25.5807 21.2109 25.2422C21.6589 24.9036 21.8828 24.4453 21.8828 23.8672C21.8828 22.5964 20.9115 21.9609 18.9688 21.9609H18.1016V20.5078H18.9297C20.6536 20.5078 21.5156 19.9089 21.5156 18.7109C21.5156 17.6068 20.8438 17.0547 19.5 17.0547C18.75 17.0547 18.0443 17.3229 17.3828 17.8594V16.25C18.1432 15.8229 19.0417 15.6094 20.0781 15.6094C21.0729 15.6094 21.8698 15.8594 22.4688 16.3594C23.0677 16.8594 23.3672 17.5 23.3672 18.2812C23.3672 19.7552 22.6172 20.7031 21.1172 21.125V21.1562C21.9245 21.2344 22.5625 21.5182 23.0312 22.0078C23.5 22.4922 23.7344 23.099 23.7344 23.8281C23.7344 24.8333 23.3568 25.6458 22.6016 26.2656C21.8464 26.8802 20.8516 27.1875 19.6172 27.1875C18.5078 27.1875 17.6224 26.987 16.9609 26.5859Z"
                          fill="white"
                        />
                      </svg>

                      <p className="ps-sm-5 ps-3 ff_Seoge fw-semibold fs_2x4l text-white mb-0">
                        Purchase your subscription
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className=" rounded-3">
                      <p className="ps-sm-5 ps-3 ms-3 ff_Seoge fw-normal fs_md text-white opacity_07 mb-0">
                        Provide a zip code and we will provide you with the
                        highest propensity prospects in a 50 mile radius.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className={activeTab === "get4" ? " Active" : "my-4"}
                    onClick={() => handleTabClick("get4")}
                    y
                    eventKey="3"
                  >
                    <Accordion.Header
                      className={activeTab === "get3" ? " fill-green" : ""}
                    >
                      <svg
                        className="mt-2"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="4" fill="#141F45" />
                        <path
                          d="M22.2344 15.7969V23.0312H23.8984V24.5391H22.2344V27H20.4766V24.5391H15.4062V23.0156C15.8646 22.5 16.3333 21.9427 16.8125 21.3438C17.2969 20.7396 17.7604 20.125 18.2031 19.5C18.651 18.8698 19.0651 18.2396 19.4453 17.6094C19.8255 16.9792 20.1458 16.375 20.4062 15.7969H22.2344ZM20.4766 23.0312V18.3281C19.9089 19.349 19.3464 20.2396 18.7891 21C18.237 21.7604 17.7188 22.4375 17.2344 23.0312H20.4766Z"
                          fill="white"
                        />
                      </svg>

                      <p className="ps-sm-5 ps-3 ff_Seoge fw-semibold fs_2x4l text-white mb-0">
                        Access your dashboard
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className=" rounded-3">
                      <p className="ps-sm-5 ps-3 ms-3 ff_Seoge fw-normal fs_md text-white opacity_07 mb-0">
                        Provide a zip code and we will provide you with the
                        highest propensity prospects in a 50 mile radius.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {activeTab === "get1" && (
                <div className="col-lg-6 ">
                  <div className="w-100 d-flex justify-content-lg-end justify-content-center mt-sm-5 mt-lg-0 align-items-center">
                    <img
                      className=" w-75 my-sm-4 mt-4 mt-sm-0 my-lg-0 pb-2 "
                      src={started}
                      alt="img"
                    />
                  </div>
                </div>
              )}
              {activeTab === "get2" && (
                <div className="col-lg-6 ">
                  <div className="w-100 d-flex justify-content-lg-end justify-content-center mt-sm-5 mt-lg-0 align-items-center">
                    <img
                      className=" w-75 my-sm-4 mt-4 mt-sm-0 my-lg-0 pb-4"
                      src={started2}
                      alt="img"
                    />
                  </div>
                </div>
              )}
              {activeTab === "get3" && (
                <div className="col-lg-6 ">
                  <div className="w-100 d-flex justify-content-lg-end justify-content-center mt-sm-5 mt-lg-0 align-items-center">
                    <img
                      className=" w-75 my-sm-4 mt-4 mt-sm-0 my-lg-0 pb-2"
                      src={started3}
                      alt="img"
                    />
                  </div>
                </div>
              )}
              {activeTab === "get4" && (
                <div className="col-lg-6 ">
                  <div className="w-100 d-flex justify-content-lg-end justify-content-center mt-sm-5 mt-lg-0 align-items-center">
                    <img
                      className=" w-75 my-sm-4 mt-4 mt-sm-0 my-lg-0 pb-2"
                      src={started4}
                      alt="img"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
