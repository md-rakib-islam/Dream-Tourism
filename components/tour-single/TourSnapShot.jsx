import { singleTourInfo } from "@/hooks/useTours";
import { useSelector } from "react-redux";
const TourSnapShot = () => {
  const {tourItem} = useSelector(state => state.tour);
 
  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Duration:
            <br /> {tourItem?.duration}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Group size:
            <br /> {singleTourInfo[tourItem?.name]?.groupSize}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-route text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Near public
            <br /> transportation
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            {tourItem?.position <= 3 ? "Non-refundable": "Free cancellation"} <br />
            <a href="#" className="text-blue-1 underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TourSnapShot;
