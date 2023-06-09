import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import Finance from "../assets/img/svg/financial.svg";
import Real from "../assets/img/svg/real.svg";
import Login from "../assets/img/svg/go-in.svg";

function Header() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="py-2 position-relative">
        <nav
          className=" bg-white py-3"
          style={{ zIndex: "2", position: "relative" }}
        >
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex gap-5 align-items-center justify-content-center">
                <a className="z_index0 my-2" href="#">
                  <img style={{ maxWidth: "170px" }} src={logo} alt="logo" />
                </a>{" "}
                <ul className="d-flex gap-3 gap-xl-5 ps-4 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                  <span className="">
                    <a
                      className="h-100 fw-semibold fs_xl d-flex align-items-center text-black ps-2 d-inline-block gap-1 "
                      href="#"
                    >
                      <img
                        className=""
                        src={Finance}
                        style={{ maxWidth: "25px" }}
                        alt="finance"
                      />
                      Finanse Services
                    </a>
                  </span>
                  <span className="">
                    <a
                      className="fw-semibold fs_xl text-black d-flex align-items-center ps-2 d-inline-block gap-1"
                      href="#"
                    >
                      <img
                        className=""
                        src={Real}
                        style={{ maxWidth: "25px" }}
                        alt="Real"
                      />
                      Real Estate
                    </a>
                  </span>
                </ul>
              </div>
              <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                <span className=" primary_btn HOVER_BLUE">
                  <a className=" fw-semibold text_green fs_xl" href="#">
                    Sign up
                  </a>
                </span>
                <span className="primary_btn_border HOVER_BLUE">
                  <a className=" fw-semibold text_green fs_xl" href="#">
                    Log in{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.325 16.275C9.14167 16.0583 9.05 15.8127 9.05 15.538C9.05 15.2633 9.14167 15.034 9.325 14.85L11.175 13H4C3.71667 13 3.479 12.904 3.287 12.712C3.095 12.52 2.99934 12.2827 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.48 11.095 3.71734 10.9993 4 11H11.175L9.325 9.15C9.125 8.95 9.025 8.71234 9.025 8.437C9.025 8.16167 9.125 7.92434 9.325 7.725C9.50834 7.525 9.73767 7.425 10.013 7.425C10.2883 7.425 10.5173 7.51667 10.7 7.7L14.3 11.3C14.4 11.4 14.471 11.5083 14.513 11.625C14.555 11.7417 14.5757 11.8667 14.575 12C14.575 12.1333 14.5543 12.2583 14.513 12.375C14.4717 12.4917 14.4007 12.6 14.3 12.7L10.7 16.3C10.5 16.5 10.2667 16.5917 10 16.575C9.73334 16.5583 9.50834 16.4583 9.325 16.275ZM13 21C12.7167 21 12.4793 20.9043 12.288 20.713C12.0967 20.5217 12.0007 20.284 12 20C12 19.7167 12.096 19.479 12.288 19.287C12.48 19.095 12.7173 18.9993 13 19H19V5H13C12.7167 5 12.479 4.904 12.287 4.712C12.095 4.52 11.9993 4.28267 12 4C12 3.71667 12.096 3.479 12.288 3.287C12.48 3.095 12.7173 2.99934 13 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H13Z"
                        fill="#1AD079"
                      />
                    </svg>
                  </a>
                </span>
              </ul>
              <div
                style={{ zIndex: "1000" }}
                className={
                  navShow
                    ? "threeline d-lg-none cursor_pointer my-2"
                    : "threeline d-lg-none cursor_pointer my-2"
                }
                onClick={() => setNavShow(!navShow)}
              >
                <a href="#">
                  <div
                    className={navShow ? " falseline1" : "  threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline" : " threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline3 " : "threelinechild"}
                  ></div>
                </a>
              </div>
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "shownav" : " hidenav"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center min-vh-100 justify-content-center  list-unstyled  pt-3 transition">
                  <ul className="d-flex flex-column gap-3 gap-xl-5 py-3 list-unstyled mb-0 align-items-center">
                    <span
                      onClick={() => setNavShow(!navShow)}
                      className="d-flex align-items-center pb-2"
                    >
                      <a
                        className="fw-semibold fs_xl text_green ps-2 d-inline-block"
                        href="#"
                      >
                        Financial Services
                      </a>
                    </span>
                    <span
                      onClick={() => setNavShow(!navShow)}
                      className="d-flex align-items-center"
                    >
                      <a
                        className="fw-semibold fs_xl text_green ps-2 d-inline-block"
                        href="#"
                      >
                        Real Estate
                      </a>
                    </span>
                  </ul>
                  <ul className="d-flex flex-column mb-0 gap-4 ps-0">
                    <span
                      onClick={() => setNavShow(!navShow)}
                      className="primary_btn"
                    >
                      <a className="fw-semibold text_green fs_xl" href="#">
                        Sign up
                      </a>
                    </span>
                    <span
                      onClick={() => setNavShow(!navShow)}
                      className="primary_btn_border"
                    >
                      <a className=" fw-semibold text_green" href="#">
                        Log in{" "}
                        <img
                          src={Login}
                          style={{ maxWidth: "25px" }}
                          alt="go"
                        />
                      </a>
                    </span>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
