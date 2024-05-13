import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";

export const metadata = {
  title: "Dream Tourism IT - Your Place for Amazing Travel Adventures",
  description:
    "Start your dream vacation with Dream Tourism IT. Explore fantastic destinations and enjoy unforgettable adventures. Your perfect getaway is just a click away!",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
