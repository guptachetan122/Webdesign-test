import {baseApi} from "../../app/baseAPI";

type Preferences = {
  superConnection: number;
};

export interface User {
  _id: string;
  city: string;
  headline: string;
  image: string;
  industryTags: string[];
  memberId: number;
  name: string;
  preferences: Preferences;
  email?: string;
  mobile?: string;
}

export interface UserResponse {
  accessToken: string;
  refreshToken: string;
  weakPasswordReset?: boolean;
  defaultPasswordReset?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  platform: string;
}

export interface InitResponse {
  user: {
    _id: string;
    name: string;
    image: string;
  };
  sendbirdApplicationId: string;
}
export interface InitRequest {
  fcmToken: string;
}
export interface ForgotPasswordRequest {
  email: string;
}
export interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/v1/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    init: builder.mutation<InitResponse, InitRequest>({
      query: (credentials) => ({
        url: "/v1/auth/init",
        method: "POST",
        data: credentials,
      }),
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (email) => ({
        url: "/v1/auth/forgot-password",
        method: "POST",
        data: email,
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: (resetPasswordCredentials) => ({
        url: "/v1/auth/reset-password",
        method: "POST",
        data: resetPasswordCredentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useInitMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
