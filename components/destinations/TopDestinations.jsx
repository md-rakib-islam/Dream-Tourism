"use client";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
// import { destinations5 } from "../../data/desinations";

const TopDestinations = () => {
  const { menuItems } = useSelector((state) => state.menus);
  const destinations = menuItems?.find(
    (item) => item.name === "Destinations"
  )?.children;
  const homeId = menuItems?.find((item) => item.name === "Home")?.id;
  const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(homeId);

  // (indx + 1) <= 3 ? (indx + 1) % 2 !== 0? "col-xl-3 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6"
  let modifiedDestinations = [];
  if (isSuccess) {
    modifiedDestinations = destinations?.map((item, indx) => ({
      id: item.id,
      colClass: "col-xl-auto col-md-4 col-sm-6",
      img: `${data?.content_images[item?.name]}`,
      name: item.name,
      numberOfProperties: "1714",
      delayAnimation: "200",
    }));
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.09,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {modifiedDestinations?.map((item) => (
          <div
            className={`${item.colClass} top_destination_width px-5`}
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link
              href={`/destinations/${item?.name
                ?.toLowerCase()
                ?.split(" ")
                ?.join("_")}`}
              className="citiesCard -type-3 d-block h-full rounded-4 "
            >
              <div className="citiesCard__image ratio ratio-3:2">
                <Image
                  className="col-12 js-lazy"
                  src={item?.img}
                  width={800}
                  height={600}
                  quality={100}
                  priority
                  alt={`${item?.name} Images`}
                />{" "}
              </div>
              <div className="citiesCard__content d-flex justify-content-center align-items-center px-30 py-30">
                <h4 className="text-26 fw-600 text-white text-capitalize">
                  {item.name}
                </h4>
                {/* <div className="text-15 text-white">
                {item.numberOfProperties} properties
              </div> */}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopDestinations;
