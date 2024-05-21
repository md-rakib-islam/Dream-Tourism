"use client";
import Image from "next/image";
import MainFilterSearchBox from "../hero/hero/MainFilterSearchBox";
const CoverSkeleton = () => {
  return (
    <>
      <section className="masthead -type-6 mb-40">
        <div className="masthead__bg skeleton">
          <Image
            src="https://imagedelivery.net/dIKhvGtesTiRSxhQ2oKWkA/6aafa0cd-5281-4800-ceba-a21d23d57a00/public"
            width={1920}
            height={860}
            alt="image"
            className="h-100"
            priority={true}
          />
        </div>

        <div
          className="container"
          style={{ position: "relative", top: "60px" }}
        >
          <div className="row justify-center">
            <div className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  The World is Waiting For You
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Discover amzaing places at exclusive deals
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="mainSearch-wrap bg-white shadow-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MainFilterSearchBox />
            {/* End tab-filter */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoverSkeleton;
