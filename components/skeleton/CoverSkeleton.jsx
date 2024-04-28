"use client";
import Image from "next/image";
import MainFilterSearchBox from "../hero/hero-3/MainFilterSearchBox";
const CoverSkeleton = () => {
  return (
    <>
      <section className="masthead -type-6">
        <div className="masthead__bg skeleton">
          <Image
            src="https://imagedelivery.net/dIKhvGtesTiRSxhQ2oKWkA/6aafa0cd-5281-4800-ceba-a21d23d57a00/public"
            width={1920}
            height={860}
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div
              className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center"
              style={{ visibility: "hidden" }}
            >
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    visibility: "hidden",
                  }}
                >
                  Ziyarat in Makkah & Madina
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    isibility: "hidden",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              </div>
              {/* End hero title */}
              <MainFilterSearchBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoverSkeleton;
