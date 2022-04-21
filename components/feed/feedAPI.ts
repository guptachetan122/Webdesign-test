import { baseApi } from "../../app/baseAPI";

export interface PostType {
  _id: string;
  type: string;
  pinned: boolean;
  likeCount: number;
  created: Date;
  content: string;
  author: {
    _id: string;
    name: string;
    image: string;
    headline: string;
  };
  alreadyLiked: boolean;
}

export interface PostMutationType {
  postId: string;
}
export interface CreatePostRequest {
  type: string;
  content: string;
}
export interface CreateCommentRequest {
  postId: string;
  content: string;
}
export interface EditPostRequest {
  postId: string;
  content: string;
}
export interface EditCommentRequest {
  postId: string;
  commentId: string;
  content: string;
}
export interface DeleteCommentRequest {
  postId: string;
  commentId: string;
}
export interface CreateReplyRequest {
  postId: string;
  commentId: string;
  content: string;
}
export interface EditReplyRequest {
  postId: string;
  commentId: string;
  replyId: string;
  content: string;
}
export interface DeleteReplyRequest {
  postId: string;
  commentId: string;
  replyId: string;
}

const baseApiWithTags = baseApi.enhanceEndpoints({
  addTagTypes: ["POST_DETAILS"],
});

export const feedApi = baseApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getPublicFeedPosts: builder.query<PostType[], number>({
      query: (page: number) => ({
        url: `/v1/feed/post/listPublic?page=${page}`,
        method: "GET",
      }),
    }),
    getPrivateFeedPosts: builder.query<PostType[], number>({
      query: (page: number) => ({
        url: `/v1/feed/post/listPublic?page=${page}`,
        method: "GET",
      }),
    }),
    getMentionFeedPosts: builder.query<PostType[], number>({
      query: (page: number) => ({
        url: `/v1/feed/post/listPublic?page=${page}`,
        method: "GET",
      }),
    }),
    getActivityFeedPosts: builder.query<PostType[], number>({
      query: (page: number) => ({
        url: `/v1/feed/post/listPublic?page=${page}`,
        method: "GET",
      }),
    }),
    getPostDetails: builder.query<void, string>({
      query: (postId: string) => ({
        url: "/v1/feed/post/details",
        method: "POST",
        data: { postId },
      }),
      providesTags: ["POST_DETAILS"],
    }),
    toggleLikeStatus: builder.mutation<void, string>({
      query: (postId: string) => ({
        url: "/v1/feed/post/toggleLikeStatus",
        method: "POST",
        data: { postId },
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    getPostLikesList: builder.query({
      query: ({ postId, page }) => ({
        url: `/v1/feed/post/listReactionMembers?page=${page}`,
        method: "POST",
        data: { postId },
      }),
    }),
    createPost: builder.mutation<void, CreatePostRequest>({
      query: (data) => ({
        url: "/v1/feed/post/create",
        method: "POST",
        data: data,
      }),
    }),
    editPost: builder.mutation<void, EditPostRequest>({
      query: (data) => ({
        url: "/v1/feed/post/edit",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    deletePost: builder.mutation<void, string>({
      query: (postId: string) => ({
        url: "/v1/feed/post/delete",
        method: "POST",
        data: { postId },
      }),
    }),
    createComment: builder.mutation<void, CreateCommentRequest>({
      query: (data) => ({
        url: "/v1/feed/comment/create",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    editComment: builder.mutation<void, EditCommentRequest>({
      query: (data) => ({
        url: "/v1/feed/comment/edit",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    deleteComment: builder.mutation<void, DeleteCommentRequest>({
      query: (data) => ({
        url: "/v1/feed/comment/delete",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    createReply: builder.mutation<void, CreateReplyRequest>({
      query: (data) => ({
        url: "/v1/feed/reply/create",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    editReply: builder.mutation<void, EditReplyRequest>({
      query: (data) => ({
        url: "/v1/feed/reply/edit",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    deleteReply: builder.mutation<void, DeleteReplyRequest>({
      query: (data) => ({
        url: "/v1/feed/reply/delete",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["POST_DETAILS"],
    }),
    report: builder.mutation({
      query: (reportInfo) => ({
        url: "/v1/report/feed/content",
        method: "POST",
        data: reportInfo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPublicFeedPostsQuery,
  useToggleLikeStatusMutation,
  useGetPostLikesListQuery,
  useGetPostDetailsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
  useCreateCommentMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
  useCreateReplyMutation,
  useEditReplyMutation,
  useDeleteReplyMutation,
  useReportMutation,
} = feedApi;
