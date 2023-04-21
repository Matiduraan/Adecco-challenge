import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<User> = [
  {
    id: 0,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null,
    posts: [],
    album: [],
  },
];

export const userSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[User]>) => {
      return action.payload;
    },
    upsertUser: (state, action: PayloadAction<User>) => {
      const filteredList = state.filter((user) => user.id != action.payload.id);
      return [...filteredList, { ...action.payload }].sort(
        (user1, user2) => user1.id - user2.id
      );
    },
  },
});

export const { setUsers, upsertUser } = userSlice.actions;

export default userSlice.reducer;
