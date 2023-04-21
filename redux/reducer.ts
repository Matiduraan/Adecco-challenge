import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import usersListSlice from "./slices/usersListSlice";
import sidebarSlice from "./slices/sidebarSlice";

const reducers = {
  users: usersListSlice,
  selectedUser: userSlice,
  sidebarOpen: sidebarSlice,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
