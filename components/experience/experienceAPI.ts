import { baseApi } from "../../app/baseAPI";

export interface ExperienceType {
  _id: string;
  status?: number;
  startDate?: Date;
  videoLink?: string;
  podcastLink?: string;
  soldOut?: boolean;
  sessionId?: number;
  title?: string;
  host?: string;
  headline?: string;
  description?: string;
  type?: string;
  paidEvent?: boolean;
  questionRequired?: boolean;
  expectations?: string;
  aboutSpeaker?: string;
  image?: string;
  __v?: number;
  alreadyBooked?: boolean;
  zoomLink?: string;
  onlineEvent?: boolean;
}

export interface AddQuestionRequest {
  experienceId: string;
  question: string;
}
export interface BookSlotRequest {
  experienceId: string;
}

const experienceApiWithTags = baseApi.enhanceEndpoints({
  addTagTypes: ["UPCOMING_EXPERIENCES", "UPCOMING_EXPERIENCE_DETAILS"],
});

export const experienceApi = experienceApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getUpcomingExperiences: builder.query<ExperienceType[], void>({
      query: () => ({
        url: "/v1/experiences/upcomingEvents",
        method: "GET",
      }),
      providesTags: ["UPCOMING_EXPERIENCES"],
    }),
    getUpcomingExperienceDetail: builder.query<ExperienceType, string>({
      query: (id: string) => ({
        url: `/v1/experiences/details/${id}`,
        method: "GET",
      }),
      providesTags: ["UPCOMING_EXPERIENCE_DETAILS"],
    }),
    getPastExperiences: builder.query<ExperienceType[], number>({
      query: (page: number) => ({
        url: `/v1/experiences/previousEvents?page=${page}`,
        method: "GET",
      }),
    }),
    addQuestion: builder.mutation<void, AddQuestionRequest>({
      query: ({ experienceId, question }) => ({
        url: "/v1/experiences/submitQuestion",
        method: "POST",
        data: { experienceId, question },
      }),
    }),
    bookSlot: builder.mutation<void, BookSlotRequest>({
      query: ({ experienceId }) => ({
        url: "/v1/experiences/bookExperience",
        method: "POST",
        data: { experienceId },
      }),
      invalidatesTags: ["UPCOMING_EXPERIENCES", "UPCOMING_EXPERIENCE_DETAILS"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUpcomingExperiencesQuery,
  useGetPastExperiencesQuery,
  useGetUpcomingExperienceDetailQuery,
  useAddQuestionMutation,
  useBookSlotMutation,
} = experienceApi;
