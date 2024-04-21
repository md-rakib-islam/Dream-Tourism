import CallToActions from "@/components/common/CallToActions";
import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";


const metaDatas = {
  "general_terms_of_use" : {
    title : "Dream Tourism UK - Terms and Conditions",
    description : "Explore the terms and conditions that govern your experience with Dream Tourism UK. Understand our commitment to quality, fairness, and your satisfaction.",
  },
  "privacy_policy" : {
    title : "Dream Tourism UK Privacy Policy - Your Privacy, Our Priority",
    description : "Read Dream Tourism UK's privacy policy to understand how we handle and protect your information. Your privacy is important to us, and we prioritize keeping your data secure.",
  },
}

export async function generateMetadata({ params, searchParams }, parent) {
  const {type} = searchParams;
 
  return {
    title: metaDatas[type]?.title,
    description : metaDatas[type]?.description
  }
}

const Terms = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
