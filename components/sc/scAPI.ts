import { MemberData } from "./memberRecommendationAPI";
import { baseApi } from "../../app/baseAPI";

export const scAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceivedSuperConnections: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/trendingMembers",
        method: "GET",
      }),
    }),
    getSentSuperConnections: builder.query<MemberData[], void>({
      query: () => ({
        url: "/v1/recommendation/newMembers",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetReceivedSuperConnectionsQuery,
  useGetSentSuperConnectionsQuery,
} = scAPI;
