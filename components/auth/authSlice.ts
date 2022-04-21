import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storageKeys } from "../../constants";
// import { sbDisconnect } from "../../utils/sb";
import { remove } from "../../utils/storage";

type AuthState = {
  userId: string | null;
  accessToken: string | null;
  name: string | null;
  userImage: string | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { userId: null, accessToken: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { userId = "", accessToken = "", name = "", userImage = "" },
      }: PayloadAction<{
        userId?: string;
        accessToken?: string;
        name?: string;
        userImage?: string;
      }>
    ) => {
      if (userId) {
        state.userId = userId;
      }
      if (accessToken) {
        state.accessToken = accessToken;
      }
      if (name) {
        state.name = name;
      }
      if (userImage) {
        state.userImage = userImage;
      }
    },
    removeCredentials: (state) => {
      state.userId = "";
      state.accessToken = "";
      state.name = "";
      state.userImage = "";
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export const logout = () => async (dispatch : any) => {
  await remove(storageKeys.USER_ID);
  await remove(storageKeys.USER_ACCESS_TOKEN);
  await remove(storageKeys.USER_REFRESH_TOKEN);
//   sbDisconnect();
  dispatch(removeCredentials());
};
