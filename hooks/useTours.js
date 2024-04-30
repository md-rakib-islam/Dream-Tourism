import { BASE_URL } from "@/constant/constants";
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import convertCurrency from "@/utils/currency";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const singleTourInfo = {
  "Colosseum, Roman Forum And Palatine Hills Priority Ticket- Skip The Ticket Line":
    {
      location: "Rome, Italy",
      numberOfReviews: "63",
      languages: "English",
      groupSize: "1-10",
      itinerarySrc: "",
    },
  "Skip the Line ticket Colosseum, Forum & Palatine Hills with Audio & Video Guide":
    {
      location: "Rome, Italy",
      numberOfReviews: "57",
      languages: "English",
      groupSize: "1-10",
      itinerarySrc: "",
    },
  "COLOSSEUM, ROMAN FORUM, PALATINE HILL - FULL EXPERIENCE With ARENA": {
    location: "Rome, Italy",
    numberOfReviews: "55",
    languages: "English",
    groupSize: "1-10",
    itinerarySrc: "",
  },
  "Capri Island Day Trip From Rome": {
    location: "Island",
    numberOfReviews: "67",
    languages: "English.",
    groupSize: "1-10",
    itinerarySrc: "",
  },
  "Capri Island Day Trip From Rome With Blue Grotto": {
    location: "Island",
    numberOfReviews: "65",
    languages: "English",
    groupSize: "1-10",
    itinerarySrc: "",
  },
  "Celebrate New Year In Paris: A 3-Night, 4-Day Tour From London": {
    location: "Paris",
    numberOfReviews: "102",
    languages: "English",
    groupSize: "1-10",
    itinerarySrc: "",
  },
  "Valentine's Day In Venice And Bernina Express Journey To Switzerland": {
    location: "Venice",
    numberOfReviews: "89",
    languages: "English",
    groupSize: "1-10",
    itinerarySrc: "",
  },
  "Tulip Garden Tour From London By Eurostar": {
    location: "London",
    numberOfReviews: "104",
    languages: "English",
    groupSize: "1-10",
    itinerarySrc: "",
  },
};

const useTours = (destination = "Home") => {
  const [tourItems, setTourItems] = useState([]);
  const { menuItems } = useSelector((state) => state?.menus);
  const { currentCurrency, exchangeRates } = useSelector(
    (state) => state?.currency
  );
  let menuId;
  if (destination === "Home") {
    menuId = menuItems.find((item) => item.name === "Home")?.id;
  } else {
    menuId = menuItems
      .find((item) => item.name === "Destinations")
      ?.children?.find((child) => child?.name === destination)?.id;
  }
  const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(menuId);
  const {
    isSuccess: isContentSuccess,
    data: contentItems,
    isLoading: isContentLoading,
  } = useGetAllContentQuery(menuId);
  useEffect(() => {
    if (isSuccess && isContentSuccess) {
      let tours = contentItems
        .filter((item) => {
          if (
            item.name === "Title" ||
            item.name === "Our Tour" ||
            item.name === "Our Tour Image" ||
            item.name === "About" ||
            item.name === "Switzerland" ||
            item.name === "Italy" ||
            item.name === "France" ||
            item.name === "Belgium" ||
            item.name === "Netherlands" ||
            item.name === "United States" ||
            item.name === "Germany"
          )
            return false;
          return true;
        })
        .map((tour) => ({
          id: tour.id,
          // tag:  tour.id === 10 ? "top rated": tour.id === 9 ? "best seller" : "LIKELY TO SELL OUT*",
          tag: "",
          slideImg: [`${data?.content_images[tour.name]}`],
          title: tour.name,
          location: singleTourInfo[tour?.name]?.location,
          duration: tour?.duration,
          numberOfReviews: singleTourInfo[tour?.name]?.numberOfReviews,
          price: convertCurrency(
            parseInt(tour?.price),
            "EUR",
            currentCurrency?.currency,
            exchangeRates
          ),
          tourType: "Full-day Tours",
          delayAnimation: "100",
          position: tour?.position,
        }));

      tours?.sort((a, b) => a?.position - b?.position);
      // If the length of tours array is 3
      if (tours.length === 3) {
        // Replace the 4th index with the first item
        tours.splice(3, 1, tours[0]);
      }

      // If the length of tours array is 2
      if (tours.length === 2) {
        // Replace the 4th index with the first and second items
        tours.splice(3, 1, tours[0], tours[1]);
      }

      setTourItems(tours);
    }
  }, [isSuccess, isContentSuccess, currentCurrency]);

  return tourItems;
};

export default useTours;
