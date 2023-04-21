import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: 0,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
  posts: [],
  album: [],
};

export const userSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User>) => {
      const { id, email, first_name, last_name, avatar, posts, album } =
        action.payload;
      return {
        ...state,
        id,
        email,
        first_name,
        last_name,
        avatar,
        posts,
        album,
      };
    },
    setEmail: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      return { ...state, email };
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      const first_name = action.payload;
      return { ...state, first_name };
    },
    setLastName: (state, action: PayloadAction<string>) => {
      const last_name = action.payload;
      return { ...state, last_name };
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      const avatar = action.payload;
      return { ...state, avatar };
    },
    removePost: (state, action: PayloadAction<number | undefined>) => {
      const filteredPosts = state.posts.filter((post) => {
        return post?.id != action.payload;
      });
      return { ...state, posts: filteredPosts };
    },
    cleanUser: (state) => {
      return initialState;
    },
  },
});

export const {
  setActiveUser,
  setEmail,
  setAvatar,
  setFirstName,
  setLastName,
  removePost,
  cleanUser,
} = userSlice.actions;

export default userSlice.reducer;
