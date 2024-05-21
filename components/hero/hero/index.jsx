// import MainFilterSearchBox from "./MainFilterSearchBox";

"use client";
import { addExchangeRates } from "@/features/currency/currencySlice";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import useCurrencyExchangeRates from "@/hooks/currency";
import Image from "next/image";
import { useDispatch } from "react-redux";
import MainFilterSearchBox from "./MainFilterSearchBox";
import CoverSkeleton from "@/components/skeleton/CoverSkeleton";
import { useEffect } from "react";
const index = ({ onDataAvailable }) => {
  const dispatch = useDispatch();
  const exchangeRates = useCurrencyExchangeRates();

  useEffect(() => {
    dispatch(addExchangeRates(exchangeRates));
  }, [dispatch, exchangeRates]);

  const { isSuccess, isLoading, data } = useGetSliderImagesQuery();
  let sliderImageItems = [];
  if (isSuccess) {
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image: `${item?.image}`,
    }));
  }

  return isLoading ? (
    <CoverSkeleton />
  ) : (
    <>
      <section className="masthead -type-6 mb-40">
        <div className="masthead__bg">
          <Image
            src={sliderImageItems[0]?.cloudflare_image_url}
            width={1920}
            height={860}
            alt="image"
            className="h-100"
            priority={true}
            onLoad={onDataAvailable(true)}
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
        <div
          className="container"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: "-125px",
          }}
        >
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

export default index;
