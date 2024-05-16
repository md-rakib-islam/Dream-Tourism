import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";

const Testimonial = ({ reviewsData }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // Initialize the array of expanded state with false for each row
    setExpandedRows(Array(reviewsData?.reviews.length).fill(false));
  }, [reviewsData]);

  const toggleReadMore = (index) => {
    const updatedRows = [...expandedRows];
    updatedRows[index] = !updatedRows[index];
    setExpandedRows(updatedRows);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const options = { month: "long", day: "numeric" };

    let formattedDate = date.toLocaleDateString("en-US", options);

    // Check if the year of the date is not the current year
    if (date.getFullYear() !== currentDate.getFullYear()) {
      formattedDate += `, ${date.getFullYear()}`;
    }

    return formattedDate;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {reviewsData?.reviews.map((item, index) => (
          <div
            className=" bg-white rounded-4 pt-20 pb-30 px-20"
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.dealyAnimation}
          >
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-4">
                <Image
                  unoptimized
                  width={60}
                  height={60}
                  src={item.cloudflare_image}
                  alt={item?.reviewer_name}
                  className="size-60 rounded-circle skeleton"
                />
              </div>
              <div className="col-8">
                <Link href={item.url} style={{ cursor: "pointer" }}>
                  <div className=" d-flex items-center text-14 fw-600 lh-14">
                    {item.reviewer_name.slice(0, 15)}
                    <Image
                      unoptimized
                      width={20}
                      height={20}
                      src="/img/featureIcons/3/verified.svg"
                      alt={item?.reviewer_name}
                      className="size-14 ml-5 rounded-circle skeleton"
                    />
                  </div>
                </Link>
                <div>
                  <p className="text-12">{formatDate(item.publication)}</p>
                </div>
              </div>
            </div>
            <div className="d-flex items-center x-gap-5 mt-10 mb-10">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="icon-star text-yellow-3 text-14" />
              ))}
            </div>
            <h4
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
              className="text-14 fw-600"
            >
              {item.title}
            </h4>
            <div className="border-top-light mt-5">
              <p
                ref={(el) => (textRefs.current[index] = el)}
                className={`title-text lh-17 fw-400 text-dark-1 text-14 mt-5  ${
                  expandedRows[index] ? "show-all" : ""
                }`}
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: expandedRows[index] ? "initial" : 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.text}
              </p>
              <button
                className="text-14 fw-200 text-dark-4"
                onClick={() => toggleReadMore(index)}
              >
                {expandedRows[index] ? "Hide" : "Read more"}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
