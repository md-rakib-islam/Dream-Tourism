import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: { id: 1, name: "Hajj", number: 0 },
  searchTerm: "",
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { addCategory, addSearchTerm, addBlogs } = blogSlice.actions;
export default blogSlice.reducer;
