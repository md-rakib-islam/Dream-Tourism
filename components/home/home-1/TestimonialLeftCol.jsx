const TestimonialLeftCol = () => {
  return (
    <>
      <h2 className="text-30">
        What our customers are
        <br /> saying us?
      </h2>
      <p className="mt-20">
      Dream Tourism UK transformed my vacation into an unforgettable escape. The genuine hospitality of their team and the meticulously crafted itinerary turned it into a cherished experience. - Mahira Zaman
      </p>
      <div className="row y-gap-30 pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">100K+</div>
          <div className="text-light-1 lh-15">Happy People</div>
        </div>
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">4.88</div>
          <div className="text-light-1 lh-15">Overall rating</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftCol;
