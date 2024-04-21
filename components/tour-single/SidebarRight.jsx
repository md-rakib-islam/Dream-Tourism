"use client";
import { useGetContentsByMenuContentTitleQuery } from '@/features/content/contentApi';
import { useParams } from 'next/navigation';
import { useEffect } from "react";
import { tourUrlsMap } from './TourSingle';


const SidebarRight = () => {
  const params = useParams()
  const {data, isSuccess, isFulfilled} = useGetContentsByMenuContentTitleQuery(tourUrlsMap[params?.name])
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=c280191f-8a4e-4462-a73b-3e69345e87dd";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="w-360 lg:w-full d-flex flex-column">
      {
        isSuccess && (<div class="bokunWidget" data-src={data?.url}></div>)
      }
        {/* <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-14 text-light-1">
            From{" "}
            <span className="text-20 fw-500 text-dark-1 ml-5">
              US${tour?.price}
            </span>
          </div>
         

          <div className="row y-gap-20 pt-30">
            <FilterBox />
          </div>
        

          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full">
              <i className="icon-heart text-16 text-green-2" />
            </div>
            <div className="text-14 lh-16 ml-10">
              94% of travelers recommend this experience
            </div>
          </div>
        </div>
       

        <div className="px-30">
          <div className="text-14 text-light-1 mt-30">
            Not sure? You can cancel this reservation up to 24 hours in advance
            for a full refund.
          </div>
        </div> */}
        {/* End div */}
      </div>
    </div>
  );
};

export default SidebarRight;
