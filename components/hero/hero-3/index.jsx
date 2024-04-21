// import MainFilterSearchBox from "./MainFilterSearchBox";

'use client'
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { addExchangeRates } from "@/features/currency/currencySlice";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import useCurrencyExchangeRates from "@/hooks/currency";
import Image from "next/image";
// import { Interweave } from "interweave";
import { useDispatch } from "react-redux";
import MainFilterSearchBox from "./MainFilterSearchBox";
const index = () => {
  const dispatch = useDispatch();
  const exchangeRates = useCurrencyExchangeRates();
  dispatch(addExchangeRates(exchangeRates));
  const {isSuccess, isLoading, data} = useGetSliderImagesQuery();
  let sliderImageItems = []
  if(isSuccess){
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image : `${BASE_URL}/${item.image}`
    }))
    
  }
  // return (
  //   <div className="row justify-center text-center">
  //   <div className="col-auto">
  //     <div className="masthead__content">
  //       <div className="masthead__bg">
  //         {
  //           isLoading ? (<Loading></Loading>) : (<Image src={sliderImageItems[0]?.image} width={1920} height={860} alt="image"/>)
  //         }
  //       </div>
  //       <h1
  //       className="text-45 lg:text-40 md:text-30 text-white"
  //       data-aos="fade-up"
  //       data-aos-delay="300"
  //     >
  //        <Interweave
  //         allowAttributes
  //         allowElements
  //         disableLineBreaks={false}
  //         content={item.title}
  //       />
  //     </h1>
  //       <div
  //         className="text-white text-30"
  //         data-aos="fade-up"
  //         data-aos-delay="100"
  //       >
  //         {item.subtitle}
  //       </div>
        
  //     </div>
  //   </div>
  // </div>
  // );

  return (
    <section className="masthead -type-6">
    <div className="masthead__bg">
      {
        isLoading ? <div className="d-flex justify-content-center align-items-center"><Loading></Loading></div> : (<Image src={sliderImageItems[0]?.image} width={1920} height={860} alt="image"/>)
       }
    </div>

    <div className="container">
      <div className="row justify-center">
        <div className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center">
          <div className="text-center">
            <h1
              className="text-45 lg:text-40 md:text-30 text-white"
              data-aos="fade-up"
            >
              The World is Waiting For You
            </h1>
            <p
              className="text-white mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover amzaing places at exclusive deals
            </p>
          </div>
          {/* End hero title */}
          <MainFilterSearchBox />
        </div>
      </div>
    </div>
  </section>
  )
};

export default index;
