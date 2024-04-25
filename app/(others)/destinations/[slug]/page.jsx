import CallToActions from "@/components/common/CallToActions";
import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
// import Activity from "@/components/activity/Activity";
import Slights from "@/components/block/Slights";
// import Cars from "@/components/cars/Cars";
// import LocationTopBar from "@/components/common/LocationTopBar";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import Banner from "@/components/destinations/components/Banner";
// import Categories from "@/components/destinations/components/Categories";
// import GeneralInfo from "@/components/destinations/components/GeneralInfo";
import IntroTown from "@/components/destinations/components/IntroTown";
import Weather from "@/components/destinations/components/Weather";
import Faq from "@/components/faq/Faq";
import Testimonial from "@/components/home/home-1/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
// import Hotels from "@/components/hotels/Hotels2";
// import Rentals from "@/components/rentals/Rentals";
import Tours from "@/components/tours/Tours";
import { slightContent } from "@/data/desinations";
import getAllMenuItem from "@/services/menuService";
import Link from "next/link";

const destinationsMetadatas = {
  netherlands: {
    title: "Explore the Netherlands with Dream Tourism IT",
    description:
      "Discover the beauty of the Netherlands with Dream Tourism IT. Enjoy scenic landscapes, lively cities, and rich culture. Plan your Dutch adventure now!",
  },
  switzerland: {
    title: "Switzerland Awaits - Dream Tourism IT",
    description:
      "Experience the magic of Switzerland with Dream Tourism IT. Enjoy stunning mountains, calm lakes, and charming cities. Plan your Swiss getaway today!",
  },
  germany: {
    title: "Discover Germany - Dream Tourism IT",
    description:
      "Explore the diverse beauty of Germany with Dream Tourism IT. From historic castles to modern cities, immerse yourself in German culture. Start planning your German adventure now!",
  },
  united_states: {
    title: "Explore the USA with Dream Tourism IT",
    description:
      "Embark on a journey through the United States with Dream Tourism IT. From famous landmarks to natural wonders, explore the best of America. Plan your USA trip today!",
  },
  italy: {
    title: "Discover Italy - Dream Tourism IT",
    description:
      "Indulge in the beauty and culture of Italy with Dream Tourism IT. From ancient ruins to delicious food, plan your dream Italian vacation today!",
  },
  belgium: {
    title: "Charm of Belgium - Dream Tourism IT",
    description:
      "Discover the enchanting beauty of Belgium with Dream Tourism IT. Explore historic towns, taste delicious chocolates, and experience Belgian hospitality. Plan your Belgian adventure now!",
  },
  france: {
    title: "Bonjour France - Dream Tourism IT",
    description:
      "Experience the allure of France with Dream Tourism IT. From the Eiffel Tower to charming villages, immerse yourself in the French way of life. Plan your dream French getaway today!",
  },
};

// export const metadata = {
//   title: "Destinations || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

export async function generateStaticParams() {
  const data = await getAllMenuItem();
  // console.log(menus);

  return data?.menus
    .find((item) => item.name === "Destinations")
    ?.children?.map((item) => ({
      slug: item.name,
    }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;

  return {
    title: destinationsMetadatas[slug]?.title,
    description: destinationsMetadatas[slug]?.description,
  };
}

const Destinations = ({ params }) => {
  const slug = params.slug;

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner slug={slug} />
          </div>
          {/* End .row */}

          {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div> */}
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            {/* <div className="col-auto">
              <h2>Discover the Best of the {slug?.split("_")?.map((word) => word?.charAt(0).toUpperCase()
    + word?.slice(1))?.join(" ")}</h2>
            </div> */}
            {/* End .col-auto */}

            <IntroTown slug={slug} />
          </div>
          {/* End .row */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* border separation */}

          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>
            {/* End. col-12 */}

            <Weather slug={slug} />
          </div>
          {/* End local weather */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            
            <GeneralInfo />
          </div> */}

          {/* <div className="mt-30 border-top-light" /> */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
      {/* End .col */}

      {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div> */}
      {/* End .row */}

      {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div> */}
      {/* End relative */}
      {/* </div>
      </section> */}
      {/* End  Hotel sections */}

      {slug === "italy" ||
      slug === "netherlands" ||
      slug === "switzerland" ||
      slug === "france" ? (
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
              <Tours
                destination={slug
                  ?.split("_")
                  ?.map(
                    (word) => word?.charAt(0).toUpperCase() + word?.slice(1)
                  )
                  ?.join(" ")}
              />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      ) : (
        ""
      )}
      {/* End Tours Sections */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
           
          </div>
          

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div>
         
        </div>
      </section> */}
      {/* Trending Activity Sections */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Holiday Rentals
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
           

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            
          </div>
        

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div>
         
        </div>
       
      </section> */}
      {/* Featured Rentals Sections */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
           

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            
          </div>
        

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars />
          </div>
         
        </div>
      
      </section> */}
      {/* Popular Car Hire Sections */}

      {/* <section className="layout-pt-md layout-pb-md">
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
         
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
         
        </div>
        
      </section> */}
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Top sights in{" "}
                  {slug
                    ?.split("_")
                    ?.map(
                      (word) => word?.charAt(0).toUpperCase() + word?.slice(1)
                    )
                    ?.join(" ")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {slightContent[slug]?.title}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Slights slug={slug} />
          </div>
          {/* End .row */}

          {/* <div className="row">
            <div className="col-auto">
              <div className="mt-20 sectionTitle -md">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {slightContent[slug]?.footerContent}
                </p>
              </div>
            </div>
          </div> */}

          <div className="row justify-center mt-40">
            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 w-250 -outline-blue-1 text-blue-1"
              >
                Explore more <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top sights in London */}

      <section className="layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                {slug
                  ?.split("_")
                  ?.map(
                    (word) => word?.charAt(0).toUpperCase() + word?.slice(1)
                  )
                  ?.join(" ")}
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq slug={slug} />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations near{" "}
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 relative">
            <TopDestinations2 slug={slug} />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End top destinations */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
