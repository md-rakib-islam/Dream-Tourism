"use client";
import TopDestinations from "@/components/destinations/TopDestinations";
import Hero3 from "@/components/hero/hero";
import WhyChoose from "@/components/home/home/WhyChoose";
import Tours from "@/components/tours/Tours";
import Link from "next/link";
import Blog4 from "../blog/Blog4";
import { useEffect, useMemo, useState } from "react";
import Testimonial from "../testimonial/Testimonial";
import Counter2 from "../counter/Counter2";
import Brand from "../brand/Brand";
import { useGetAllReviewsQuery } from "@/features/reviews/reviewsApi";

// export const metadata = {
//   title: "Home-3 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const index = () => {
  const { data: reviewsData, isSuccess: reviewsSuccess } =
    useGetAllReviewsQuery(null);

  const [dataAvailable, setDataAvailable] = useState(false);
  const [isShow, setIsShow] = useState(false);

  // Function to handle data availability
  const handleDataAvailability = (isDataAvailable) => {
    setDataAvailable(isDataAvailable);
  };
  const memoizedApiCallsMade = useMemo(() => isShow, [isShow]);

  useEffect(() => {
    const handleScroll = () => {
      if (!memoizedApiCallsMade && window.scrollY > 0) {
        setIsShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [memoizedApiCallsMade]);

  return (
    <>
      {/* <Hero7/> */}
      <div className="header-margin"></div>
      <Hero3 onDataAvailable={handleDataAvailability} />
      {/* End Hero 3 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-22 justify-between items-start">
            <div className="col-8 col-lg-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore Our Best Sellers: Unmatched Experiences in Every
                  Journey
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-4 col-lg-auto">
              <Link
                href="/tours"
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
      {/* End Popular Tours Sections */}

      {dataAvailable && (
        <>
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Top Daily Tours for Ultimate Experiences
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Experience the best daily tours, offering unforgettable
                      adventures and sights.
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                <Tours dailyTours={true} />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Daily Tours Sections */}
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Top Long Tours for Ultimate Adventures
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Discover unforgettable journeys with our top-rated,
                      thrilling long tours.
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20">
                <Tours multiDays={true} />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Multi Days Tours Sections */}
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Top Destinations</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Exciting Destinations, Tailored for Every Explorer
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row y-gap-40 pt-40 sm:pt-20">
                <TopDestinations />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
        </>
      )}
      {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Book With Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Experience Quality and Excellence with DreamTourism
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      {/* <section
        style={{ backgroundColor: "#EAFBF7" }}
        className="layout-pt-md layout-pb-md"
      >
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Free cancellation</h2>
                <p
                  style={{ color: "black" }}
                  className="mt-5 sm:mt-4 bannar_mobile"
                >
                  You'll receive a full refund if you cancel at least 24 <br />{" "}
                  hours in advance of most experiences.
                </p>
                <p
                  style={{ color: "black" }}
                  className=" mt-5 sm:mt-4 bannar_desktop"
                >
                  You'll receive a full refund if you cancel at least 24 hours
                  in advance of most experiences.
                </p>
              </div>
            </div>
          </div>
          End .row 
        </div>
      End .container 
      </section> */}

      {dataAvailable && (
        <>
          {/* 3rd party trip advisor reviews
          <section className="layout-pt-md layout-pb-md mt-5">
            <div className="container">
              <div
                className="elfsight-app-2ceb007c-5dd9-4629-9ac6-7672a9079871"
                data-elfsight-app-lazy
              ></div>
            </div>
          </section> */}
          {reviewsSuccess && (
            <section className="section-bg layout-pt-lg layout-pb-lg">
              <div className="section-bg__item -mx-20 bg-light-2" />
              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title">
                        Overheard from travelers
                      </h2>
                      <p className=" sectionTitle__text mt-5 sm:mt-0">
                        These popular destinations have a lot to offer
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .row */}

                <div className="overflow-hidden pt-40 js-section-slider">
                  <div className="item_gap-x30">
                    <Testimonial reviewsData={reviewsData} />
                  </div>
                </div>
                {/* End .overflow-hidden */}

                <div className="row y-gap-30 items-center pt-40 sm:pt-20">
                  <div className="col-xl-4">
                    <Counter2 />
                  </div>
                  {/* End .col */}

                  <div className="col-xl-8">
                    <div className="row y-gap-30 justify-between items-center">
                      <Brand />
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </section>
          )}
          {/* End testimonial section */}
          <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Get inspiration for your next trip
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Interdum et malesuada fames
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row  */}
              <div className="row y-gap-30 pt-40">
                <Blog4 />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>

          {isShow && (
            <section className="layout-pt-md layout-pb-md mt-5">
              <div className="container">
                <div className="row y-gap-20 justify-between items-end">
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title">Popular Links</h2>
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
                  <ul className="linksList">
                    <li className="linkItem">
                      <Link className="link" href="/destinations/france">
                        Things to do in France
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/destinations/france">
                        Places to visit in Paris
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Top attractions in Spain
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Must-see sights in Barcelona
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/destinations/germany">
                        Activities in Germany
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Best things to do in Berlin
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Attractions in the United Kingdom
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Explore London's landmarks
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        What to do in Greece
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Sightseeing in Athens
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Activities in Portugal
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Discover Lisbon's highlights
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Things to see in the Netherlands
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Visit Amsterdam's famous spots
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Top experiences in Switzerland
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Galway's artistic charm
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Must-do activities in Austria
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Discover Vienna's cultural gems
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Top experiences in Switzerland
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Charming towns in Tuscany
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Exploring Florence's treasures
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Discovering Venice's magic
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Unforgettable experiences in Rome
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Italy's hidden gems
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Experience Brussels' charm
                      </Link>
                    </li>
                    <li className="linkItem">
                      <Link className="link" href="/">
                        Things to explore in Belgium
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </section>
          )}
        </>
      )}
    </>
  );
};

export default index;
