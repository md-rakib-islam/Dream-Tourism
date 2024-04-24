import Wrapper from "@/components/layout/Wrapper";
// import MainHome from "../app/(homes)/home_3/page";
import MainHome from "@/components/home/MainHome";

export const metadata = {
  title: "Dream Tourism IT - Your Place for Amazing Travel Adventures",
  description:
    "Start your dream vacation with Dream Tourism IT. Explore fantastic destinations and enjoy unforgettable adventures. Your perfect getaway is just a click away!",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
