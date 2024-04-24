import { useGetBlogsAllWithPaginationQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import getMonthDayYear from "@/utils/date";
import { useSelector } from "react-redux";

const useBlogs = () => {
  const { menuItems } = useSelector((state) => state.menus);
  const blogId = menuItems.find((item) => item.name === "Blog")?.id;
  const {
    isSuccess: isContentSuccess,
    data: contentItems,
    isLoading: isBlogContentLoading,
  } = useGetBlogsAllWithPaginationQuery();
  // const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(blogId);

  console.log("blogItem", contentItems);
  let blogPosts = [];
  if (isContentSuccess) {
    blogPosts = contentItems?.blogs.map((item) => ({
      id: item.id,
      img: item?.image,
      title: item.title,
      date: item?.date,
      delayAnimation: "100",
      details: item.description,
      short_des: item?.short_des,
      tag: "art",
      tags: ["adventure_travel", "food_drink"],
      created_at: item?.created_at,
      category: item?.category,
    }));
  }
  return blogPosts;
};

export default useBlogs;
