import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../assets//img/svg/left-arrow.svg";
import next from "../assets//img/svg/right-arrow.svg";
function Review() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const mySlider = useRef();
  return (
    <>
      <section id="Review" className=" pt-lg-5 pb-xl-5 position-relative">
        <div className=" position-absolute green-shadow"></div>
        <div className=" position-absolute blue-shodow"></div>
        <div className="pt-5 pb-lg-5">
          <div className="container position-relative" style={{ zIndex: "1" }}>
            <div className="d-flex justify-content-between align-items-center pb-md-5 pb-3">
              <div className=" cursor_pointer">
                {" "}
                <img
                  onClick={() => mySlider.current.slickPrev()}
                  src={prev}
                  alt="arrow"
                />
              </div>
              <h2 className=" ff_Seoge fw-semibold fs_4x5l text-black text-center">
                See what our users say{" "}
              </h2>
              <div className=" cursor_pointer">
                {" "}
                <img
                  onClick={() => mySlider.current.slickNext()}
                  src={next}
                  alt="arrow"
                />
              </div>
            </div>
            <Slider ref={mySlider} {...settings}>
              <div className="p-1">
                <div className="py-5 px-4 bg-white rounded-3 overflow-hidden position-relative">
                  <div className=" position-absolute overlay_over_cards"></div>
                  <div className="d-flex align-items-center gap-3 pb-5 px-2">
                    <div className="Circle-User d-flex justify-content-center align-items-center">
                      <h5 className="p-3  ff_Seoge fs_md fw-semibold  mb-0">
                        PM
                      </h5>
                    </div>
                    <div>
                      <h2 className=" ff_Seoge fs_xl fw-semibold mb-0 text_black">
                        Paul Morris
                      </h2>
                      <h3 className=" ff_Seoge fw-normal fs_xsm text_black">
                        CEO of KW Forward Living KW Regianal Owner
                      </h3>
                    </div>
                  </div>
                  <p className=" ff_Seoge fs_md fw-normal text_black px-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
              <div className="p-1">
                <div className="py-5 px-4 bg-white rounded-3">
                  <div className="d-flex align-items-center gap-3 pb-5 px-2">
                    <div className="Circle-User d-flex justify-content-center align-items-center">
                      <h5 className="p-3  ff_Seoge fs_md fw-semibold  mb-0">
                        RC
                      </h5>
                    </div>
                    <div>
                      <h2 className=" ff_Seoge fs_xl fw-semibold mb-0 text_black">
                        Richard Chung
                      </h2>
                      <h3 className=" ff_Seoge fw-normal fs_xsm text_black">
                        Killer Williams
                      </h3>
                    </div>
                  </div>
                  <p className=" ff_Seoge fs_md fw-normal text_black px-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
              <div className="p-1">
                <div className="py-5 px-4 bg-white rounded-3">
                  <div className="d-flex align-items-center gap-3 pb-5 px-2">
                    <div className="Circle-User d-flex justify-content-center align-items-center">
                      <h5 className="p-3  ff_Seoge fs_md fw-semibold  mb-0">
                        PM
                      </h5>
                    </div>
                    <div>
                      <h2 className=" ff_Seoge fs_xl fw-semibold mb-0 text_black">
                        Paul Morris
                      </h2>
                      <h3 className=" ff_Seoge fw-normal fs_xsm text_black">
                        CEO of KW Forward Living KW Regianal Owner
                      </h3>
                    </div>
                  </div>
                  <p className=" ff_Seoge fs_md fw-normal text_black px-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
