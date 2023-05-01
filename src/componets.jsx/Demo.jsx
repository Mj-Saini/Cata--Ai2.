import React, { useState } from "react";
import playbtn from "../assets/img/svg/play-btn.svg";
import pause from "../assets/img/png/pause.png";
import videoClip from "../assets/Video/.।।।_jean_2_ranjit_bawa_full_status_attt_karti_।।।।(360p).mp4";
import { useRef } from "react";
function Demo() {
  const MyBtn = useRef(null);
  const clipHendler = (control) => {
    if (control === "play") {
      MyBtn.current.play();
    } else if (control === "pause") {
      MyBtn.current.pause();
    }
  };
  const [play, setplay] = useState(0);

  return (
    <>
      <section id="Demo" className="mb-lg-5 mb-4">
        <div className="container">
          <div className="my-xl-5 py-lg-5 pt-md-5 pt-sm-4 position-relative">
            <div className="green-shadow1 z_index-1 position-absolute"></div>
            <div className="blue-shadow1 z_index-1 position-absolute"></div>
            <div className="clip_size mb-5 mx-auto position-relative">
              <div className="thumbnail "></div>

              <div
                className=" d-flex flex-column justify-content-center align-items-center h-100 gap-md-4 position-relative "
                style={{ zIndex: "2" }}
              >
                <h2 className=" fs_4x9l ff_Seoge fw-semibold text-white">
                  Watch a demo
                </h2>
                <div>
                  {play ? (
                    <span
                      className=" position-relative"
                      onClick={() => {
                        clipHendler("pause");
                        setplay(!play);
                      }}
                    >
                      <img
                        style={{ width: "50px" }}
                        className="Playbtn cursor_pointer "
                        src={pause}
                        alt="Err to load"
                      />
                    </span>
                  ) : (
                    <span
                      className=" position-relative"
                      onClick={() => {
                        clipHendler("play");
                        setplay(!play);
                      }}
                    >
                      <img
                        style={{ width: "50px" }}
                        className="Playbtn cursor_pointer"
                        src={playbtn}
                        alt="Err to load"
                      />
                    </span>
                  )}

                  <video
                    className={
                      play
                        ? " opacity-100 z_index2"
                        : "opacity-0 z_index1 w-100"
                    }
                    ref={MyBtn}
                    width="100%"
                    height="100%"
                    style={{
                      transition: "all 300ms ease-in-out",
                      position: "absolute",
                      left: "0",
                      top: "0",
                      zIndex: "3",
                    }}
                    src={videoClip}
                  ></video>
                </div>
                <p className=" fs_lg ff_Seoge text-center fw-semibold text-white mt-2">
                  Catalyze AI is a predictive analytics business development
                  platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Demo;
