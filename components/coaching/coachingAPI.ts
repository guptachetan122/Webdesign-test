import { baseApi } from "../../app/baseAPI";

export type PackageType = {
  cost: number;
  popular: boolean;
  preTaxCost: number;
  sessionCount: number;
  _id: string;
};

export interface CoachData {
  _id: string;
  city: string;
  description?: string;
  experience?: string;
  headline: string;
  image: string;
  name: string;
  offline?: string;
  sessionDuration?: number;
  chemistrySessionDuration?: number;
  rating?: number;
  topicList?: string[];
  trending?: boolean;
  videoLink?: string;
  packages?: PackageType[];
  linkedin?: string;
  trialSessionAlreadyBooked?: boolean;
}

type GetCoachesRequest = {
  filter: string;
  sort: string;
};

interface BookCoachResponse {
  short_url: string;
  orderId: string;
}

interface GetOrderPaymentStatusResponse {
  paymentStatus: boolean;
}

export interface GetPreviousOrdersResponse {
  _id: string;
  orderId: string;
  paymentTime: Date;
  coach: {
    _id: string;
    name: string;
    headline: string;
    city: string;
    image: string;
  };
  package: {
    _id: string;
    sessionCount: number;
    cost: number;
  };
}

interface GetPreviousCoachResponse {
  previousCoach: {
    _id: string;
    name: string;
    headline: string;
    city: string;
    image: string;
    experience: string;
  };
}

const coachingApiWithTags = baseApi.enhanceEndpoints({
  addTagTypes: [
    "PREVIOUS_TRIALS",
    "PREVIOUS_ORDERS",
    "PREVIOUS_COACH",
    "COACH_DETAILS",
    "GET_UNREAD_INAPP_NOTIFICATIONS_COUNT",
  ],
});

export const coachingApi = coachingApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getCoaches: builder.query<CoachData[], GetCoachesRequest>({
      query: (data: GetCoachesRequest) => {
        return {
          url: `/v1/coaching/listCoaches?sort=${data.sort}&filter=${data.filter}`,
          method: "GET",
        };
      },
    }),
    getPreviousTrials: builder.query<any, void>({
      query: () => ({
        url: "/v1/coaching/listPreviousTrials",
        method: "GET",
      }),
      providesTags: ["PREVIOUS_TRIALS"],
    }),
    getCoachDetail: builder.query<CoachData, string>({
      query: (coachId) => ({
        url: `/v1/coaching/coachDetails/${coachId}`,
        method: "GET",
      }),
      providesTags: ["COACH_DETAILS"],
    }),
    bookChemistrySession: builder.mutation<BookCoachResponse, string>({
      query: (coachId) => ({
        url: "/v1/coaching/bookTrial",
        method: "POST",
        data: { coachId },
      }),
      invalidatesTags: [
        "PREVIOUS_TRIALS",
        "COACH_DETAILS",
        "GET_UNREAD_INAPP_NOTIFICATIONS_COUNT",
      ],
    }),
    bookCoach: builder.mutation<BookCoachResponse, string>({
      query: (packageId) => ({
        url: "/v1/coaching/bookPackage",
        method: "POST",
        data: { packageId },
      }),
    }),
    getOrderPaymentStatus: builder.mutation<
      GetOrderPaymentStatusResponse,
      string
    >({
      query: (orderId) => ({
        url: "v1/coaching/checkOrderPayment",
        method: "POST",
        data: { orderId },
      }),
    }),
    getPreviousOrders: builder.query<GetPreviousOrdersResponse[], void>({
      query: () => ({
        url: "/v1/coaching/previousOrders",
        method: "GET",
      }),
      providesTags: ["PREVIOUS_ORDERS"],
    }),
    getPreviousCoach: builder.query<GetPreviousCoachResponse, void>({
      query: () => ({
        url: "/v1/coaching/previousCoach",
        method: "GET",
      }),
      providesTags: ["PREVIOUS_COACH"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCoachesQuery,
  useGetPreviousTrialsQuery,
  useGetCoachDetailQuery,
  useBookCoachMutation,
  useGetOrderPaymentStatusMutation,
  useGetPreviousOrdersQuery,
  useGetPreviousCoachQuery,
  useBookChemistrySessionMutation,
} = coachingApi;
