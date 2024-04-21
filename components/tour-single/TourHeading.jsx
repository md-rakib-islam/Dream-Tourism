import { GET_CONTENT_BY_TITLE } from '@/constant/constants';

const tourUrlsMap = {
  "colosseum-roman-forum-and-palatine-hills-priority-ticket-skip-the-ticket-line" : "Colosseum, Roman Forum And Palatine Hills Priority Ticket- Skip The Ticket Line",
  "skip-the-line-ticket-colosseum-forum-%26-palatine-hills-with-audio-%26-video-guide" : "Skip the Line ticket Colosseum, Forum & Palatine Hills with Audio & Video Guide",
  "colosseum-roman-forum-palatine-hill--full-experience-with-arena" : "COLOSSEUM, ROMAN FORUM, PALATINE HILL - FULL EXPERIENCE With ARENA",
  "capri-island-day-trip-from-rome" : "Capri Island Day Trip From Rome",
  "capri-island-day-trip-from-rome-with-blue-grotto" : "Capri Island Day Trip From Rome With Blue Grotto",
  "celebrate-new-year-in-paris%3A-a-3night-4day-tour-from-london" : "Celebrate New Year In Paris: A 3-Night, 4-Day Tour From London",
  "valentine's-day-in-venice-and-bernina-express-journey-to-switzerland" : "Valentine's Day In Venice And Bernina Express Journey To Switzerland",
  "tulip-garden-tour-from-london-by-eurostar" : "Tulip Garden Tour From London By Eurostar",
}


export const singleTourInfo = {
    "Colosseum, Roman Forum And Palatine Hills Priority Ticket- Skip The Ticket Line" : {
        location : "Rome, Italy",
        numberOfReviews : "63",
        languages : "English",
        groupSize : "1-10",
    },
    "Skip the Line ticket Colosseum, Forum & Palatine Hills with Audio & Video Guide": {
        location : "Rome, Italy",
        numberOfReviews : "57",
        languages : "English",
        groupSize : "1-10",
    },
    "COLOSSEUM, ROMAN FORUM, PALATINE HILL - FULL EXPERIENCE With ARENA" : {
        location : "Rome, Italy",
        numberOfReviews : "55",
        languages : "English",
        groupSize : "1-10",
    },
    "Capri Island Day Trip From Rome" : {
        location : "Island",
        numberOfReviews : "67",
        languages : "English.",
        groupSize : "1-10",
    },
    "Capri Island Day Trip From Rome With Blue Grotto" : {
        location : "Island",
        numberOfReviews : "65",
        languages : "English",
        groupSize : "1-10",
    },
    "Celebrate New Year In Paris: A 3-Night, 4-Day Tour From London" : {
        location : "Paris",
        numberOfReviews : "102",
        languages : "English",
        groupSize : "1-10",
    },
    "Valentine's Day In Venice And Bernina Express Journey To Switzerland" : {
        location : "Venice",
        numberOfReviews : "89",
        languages : "English",
        groupSize : "1-10",
    },
    "Tulip Garden Tour From London By Eurostar" : {
        location : "London",
        numberOfReviews : "104",
        languages : "English",
        groupSize : "1-10",
    }
}

const TourHeading = async({ params}) => {
    // const name = params?.name;
    
    const res = await fetch(`${GET_CONTENT_BY_TITLE}/${tourUrlsMap[params?.name]}`);
    let data;
    if(res.ok){
         data = await res.json();
    }

  return (
    <div className="col-9">
              <h1 className="text-30 fw-600">{data?.name}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>

                    <div className="text-14 text-light-1 ml-10">
                    {singleTourInfo[data?.name]?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {singleTourInfo[data?.name]?.location}
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TourHeading