"use client";
import {
  useGetContentsByMenuContentTitleQuery,
  useGetItenariesByMenuContentIdQuery,
} from "@/features/content/contentApi";
import "photoswipe/dist/photoswipe.css";
import ImportantInfo from "@/components/tour-single/ImportantInfo";
import TourGallery from "@/components/tour-single/TourGallery";
import ReviewProgress2 from "@/components/activity-single/guest-reviews/ReviewProgress2";
import Itinerary from "@/components/tour-single/itinerary";
import Tours from "@/components/tours/Tours";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import { addItenarayItems, addtourItem } from "@/features/tour/tourSlice";
import { singleTourInfo } from "@/hooks/useTours";
import Loading from "@/app/loading";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { capitalize } from "@/utils";

export const tourUrlsMap = {
  "colosseum-roman-forum-and-palatine-hills-priority-ticket-skip-the-ticket-line":
    "Colosseum, Roman Forum And Palatine Hills Priority Ticket- Skip The Ticket Line",
  "skip-the-line-ticket-colosseum-forum-%26-palatine-hills-with-audio-%26-video-guide":
    "Skip the Line ticket Colosseum, Forum & Palatine Hills with Audio & Video Guide",
  "colosseum-roman-forum-palatine-hill--full-experience-with-arena":
    "COLOSSEUM, ROMAN FORUM, PALATINE HILL - FULL EXPERIENCE With ARENA",
  "capri-island-day-trip-from-rome": "Capri Island Day Trip From Rome",
  "capri-island-day-trip-from-rome-with-blue-grotto":
    "Capri Island Day Trip From Rome With Blue Grotto",
  "celebrate-new-year-in-paris%3A-a-3night-4day-tour-from-london":
    "Celebrate New Year In Paris: A 3-Night, 4-Day Tour From London",
  "valentine's-day-in-venice-and-bernina-express-journey-to-switzerland":
    "Valentine's Day In Venice And Bernina Express Journey To Switzerland",
  "tulip-garden-tour-from-london-by-eurostar":
    "Tulip Garden Tour From London By Eurostar",
};

const TourSingleV1Dynamic = ({ params, children }) => {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state.menus);
  const tourId = menuItems.find((item) => item.name === "Tour")?.id;
  const { data, isSuccess, isFulfilled } =
    useGetContentsByMenuContentTitleQuery(capitalize(params?.name));

  const {
    data: imageContents,
    isSuccess: isImageContentsSuccess,
    isLoading,
  } = useGetImagesByMenuIdQuery(tourId);

  const { data: itenarayItems, isSuccess: isItenariesSuccess } =
    useGetItenariesByMenuContentIdQuery(data?.id);

  if (isItenariesSuccess) {
    dispatch(addItenarayItems(itenarayItems));
  }
  let tour = {};
  if (isSuccess && isImageContentsSuccess) {
    // console.log("images", imageContents.content_images[data?.name]);
    tour = {
      id: data?.id,
      tag: "",
      slideImg:
        typeof imageContents?.content_images[data?.name] === "string"
          ? [`${BASE_URL}/media/${imageContents.content_images[data?.name]}`]
          : imageContents?.content_images[data?.name]?.map(
              (imgSrc) => `${BASE_URL}/media/${imgSrc}`
            ),
      title: data?.name,
      location: singleTourInfo[data?.name]?.location,
      duration: data?.duration,
      numberOfReviews: singleTourInfo[data?.name]?.numberOfReviews,
      price: data?.price,
      tourType: "Attractions & Museums",
      delayAnimation: "200",
      languages: singleTourInfo[data?.name]?.languages,
    };
    // console.log("Hele", data);
    dispatch(addtourItem(data));
  }

  console.log("capitalize(params?.name", capitalize(params?.name));
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            {children}
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto btn-group dropup">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="button px-15 py-10 -blue-1 "
                  >
                    <i className="icon-share mr-10"></i>
                    Share
                  </button>
                  <ul className="dropdown-menu">
                    <li className="d-flex my-2">
                      <FacebookShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                      <FacebookMessengerShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <FacebookMessengerIcon size={32} round={true} />
                      </FacebookMessengerShareButton>
                      <WhatsappShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <WhatsappIcon size={32} round={true} />
                      </WhatsappShareButton>
                      <EmailShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <EmailIcon size={32} round={true} />
                      </EmailShareButton>
                      <LinkedinShareButton
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </div>

                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10"></i>
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      {isLoading ? (
        <div className="col-12 h-50 text-center">
          <Loading />
        </div>
      ) : (
        <TourGallery tour={tour} />
      )}

      {/* End single page content */}

      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-500">Important information</h3>
              </div>
            </div>
            {/* End row */}
            <ImportantInfo />
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End important info */}

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary />
        </div>
      </section>
      {/* End Itinerary */}

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-3">
              <h3 className="text-22 fw-500">Guest reviews</h3>
              <ReviewProgress2 />
            </div>
          </div>
        </div>
      </section>
      {/* End Review section */}

      <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore Our Best Sellers: Unmatched Experiences in Every
                  Journey
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}
    </>
  );
};

export default TourSingleV1Dynamic;
