import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  posts: Array<any>;
}

const initialState: PostsState = {
  posts: [
    {
      id: "1",
      name: "Dom",
    },
  ],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("%c  action:", "color: #0e93e0;background: #aaefe5;", action.payload);
      return (state = { ...state, posts: [...state.posts, action.payload] });
    },
    delete: (state, id) => {
      const filter_posts = state.posts.filter((i) => i.id !== id);
      state = { ...state, posts: filter_posts };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, delete: any } = counterSlice.actions;

export default counterSlice.reducer;
