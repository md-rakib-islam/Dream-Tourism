import { CREATE_CMS_BLOG_COMMENTS } from "@/constant/constants";
import { apiSlice } from "../api/apiSlice";

export const blogCommentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlogComment: builder.mutation({
      query: (data) => ({
        url: CREATE_CMS_BLOG_COMMENTS,
        method: "POST",
        body: data,
      }),
    }),
    getCommentByBlogId: builder.query({
      query: (blogId) => ({
        url: `${GET_CMS_BLOG_COMMENTS_BY_BLOG_ID}/${blogId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBlogCommentMutation, useGetCommentByBlogIdQuery } =
  blogCommentApi;
