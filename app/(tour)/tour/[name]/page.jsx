import Wrapper from "@/components/layout/Wrapper";
import TourHeading from "@/components/tour-single/TourHeading";
import TourSingle from "@/components/tour-single/TourSingle";
import getAllContentByMenuId from "@/services/contentService";
import getAllMenuItem from "@/services/menuService";


const tourMetadatas = {
    "colosseum-roman-forum-and-palatine-hills-priority-ticket-skip-the-ticket-line" : {
        title : "Skip-the-Line Colosseum Tour - Explore Roman Forum & Palatine Hills",
        description : "Discover ancient Rome hassle-free with our priority ticket tour. Skip the lines and explore the Colosseum, Roman Forum, and Palatine Hills. Immerse yourself in history effortlessly."
    },
    "skip-the-line-ticket-colosseum-forum-%26-palatine-hills-with-audio-%26-video-guide" : {
        title : "Colosseum & Forum Skip-the-Line with Audio & Video Guide",
        description : "Enjoy a seamless visit to the Colosseum, Forum, and Palatine Hills with our skip-the-line ticket. Enhance your experience with an informative audio and video guide."
    },
    "colosseum-roman-forum-palatine-hill--full-experience-with-arena" : {
        title : "Full Colosseum Experience with Arena Access - Rome Tour",
        description : "Immerse yourself in the grandeur of ancient Rome! Explore the Colosseum, Roman Forum, and Palatine Hill with exclusive arena access. A full Roman experience awaits!"
    },
    "capri-island-day-trip-from-rome" : {
      title : "Day Trip to Capri Island from Rome - Discover Paradise",
      description : "Escape to the enchanting Capri Island for a day. Explore its beauty, stroll through charming streets, and enjoy breathtaking views. A perfect getaway from Rome!"
  },
 "capri-island-day-trip-from-rome-with-blue-grotto" : {
    title : "Capri Island Day Trip from Rome with Blue Grotto Adventure",
    description : "Experience the magic of Capri and venture into the famous Blue Grotto on this day trip from Rome. A day filled with natural beauty and unforgettable moments."
},
"celebrate-new-year-in-paris%3A-a-3night-4day-tour-from-london" : {
  title : "New Year Celebration in Paris - 3 Nights, 4 Days from London",
  description : "Ring in the New Year in the City of Lights! Join our 3-night, 4-day tour from London to celebrate in style. Paris awaits with festive charm and unforgettable moments."
},
"valentine's-day-in-venice-and-bernina-express-journey-to-switzerland" : {
  title : "Valentine's Day in Venice and Bernina Express Journey to Switzerland",
  description : "Celebrate love with a romantic Valentine's Day in Venice. Enjoy a scenic Bernina Express journey to Switzerland, creating timeless memories with your special someone."
},
"tulip-garden-tour-from-london-by-eurostar" : {
  title : "Tulip Garden Tour from London by Eurostar - Blooming Beauty",
  description : "Witness the beauty of blooming tulip gardens with our Eurostar tour from London. A colorful journey awaits as you explore stunning tulip fields and gardens."
}
}

export async function generateStaticParams() {
  const data = await getAllMenuItem();
  const homeId = data?.menus?.find((item) => item.name === "Home")?.id;
  
  const tourContents = await getAllContentByMenuId(homeId);
 
  const modifiedContents =  tourContents?.filter((item) => {
    if(item.name === 'Title' ||
    item.name === 'Our Tour' ||
    item.name === 'Our Tour Image' ||
    item.name === 'About' ||
    item.name === 'Switzerland' ||
    item.name === 'Italy' ||
    item.name === 'France' ||
    item.name === 'Belgium' ||
    item.name === 'Netherlands' ||
    item.name === 'United States' ||
    item.name === 'Germany') return false;
    return true;
    })
    // console.log("fdf", modifiedContents);
    return modifiedContents?.map((item) => ({
      name : item?.name?.toLowerCase()?.split(" ")?.join("-"),
      // slug : item?.id?.toString()
    }));
}

export async function generateMetadata({ params, searchParams }, parent) {
    const {name} = params;
   
    return {
      title: tourMetadatas[name]?.title,
      description : tourMetadatas[name]?.description
    }
  }

export default function Tour({ params }) {

  
  return (
    <>
      <Wrapper>
        <TourSingle params={params}>
          <TourHeading params={params}/>
        </TourSingle>
      </Wrapper>
    </>
  );
}