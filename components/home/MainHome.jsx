import TopDestinations from "@/components/destinations/TopDestinations";
// import Hero7 from "@/components/hero/hero-7";
import Hero3 from "@/components/hero/hero-3";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import Tours from "@/components/tours/Tours";
import dynamic from "next/dynamic";
import Link from "next/link";

// export const metadata = {
//   title: "Home-3 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const home_3 = () => {
  return (
    <>
      {/* <Hero7/> */}
      <div className="header-margin"></div>
      <Hero3 />
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
      {/* End Tours Sections */}

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
      {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
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

      <section
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
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
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
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });
