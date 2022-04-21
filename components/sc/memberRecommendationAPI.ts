import { baseApi } from "../../app/baseAPI";
export interface MemberData {
  _id: string;
  name: string;
  image: string;
  headline: string;
  connected: boolean;
}

export const memberRecommendationAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingMembers: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/trendingMembers",
        method: "GET",
      }),
    }),
    getNewMembers: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/newMembers",
        method: "GET",
      }),
    }),
    getCityMembers: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/trendingMembers",
        method: "GET",
      }),
    }),
    getCompanyMembers: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/newMembers",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTrendingMembersQuery,
  useGetNewMembersQuery,
  useGetCityMembersQuery,
  useGetCompanyMembersQuery,
} = memberRecommendationAPI;
