import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "./feedAPI";

type FeedState = {
  publicPosts: PostType[];
  privatePosts: PostType[];
  mentionPosts: PostType[];
  activityPosts: PostType[];
};

const togglePostLikeCb = (post : any, postId : any) => {
  if (post._id === postId) {
    let updatedAlreadyLiked;
    let updatedLikeCount;
    if (post.alreadyLiked) {
      updatedAlreadyLiked = false;
      updatedLikeCount = post.likeCount - 1;
    } else {
      updatedAlreadyLiked = true;
      updatedLikeCount = post.likeCount + 1;
    }
    return {
      ...post,
      likeCount: updatedLikeCount,
      alreadyLiked: updatedAlreadyLiked,
    };
  }
  return post;
};

const addCommentCb = (post: any, postId: any) => {
  if (post._id === postId) {
    const updatedCommentCount = post.commentCount + 1;
    return {
      ...post,
      commentCount: updatedCommentCount,
    };
  }
  return post;
};

const deleteCommentCb = (post: any, postId: any) => {
  if (post._id === postId) {
    const updatedCommentCount = post.commentCount - 1;
    return {
      ...post,
      commentCount: updatedCommentCount,
    };
  }
  return post;
};

const deletePostCb = (post: any, postId: any) => {
  return post._id !== postId;
};

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    publicPosts: [],
    privatePosts: [],
    mentionPosts: [],
    activityPosts: [],
  } as FeedState,
  reducers: {
    setPublicPosts: (
      state,
      {
        payload: { posts, reset = false },
      }: PayloadAction<{
        posts: PostType[];
        reset?: boolean;
      }>
    ) => {
      if (reset) {
        state.publicPosts = posts;
      } else {
        const mergedPosts = [...state.publicPosts, ...posts];
        state.publicPosts = mergedPosts;
      }
    },
    setPrivatePosts: (
      state,
      {
        payload: { posts, reset = false },
      }: PayloadAction<{
        posts: PostType[];
        reset?: boolean;
      }>
    ) => {
      if (reset) {
        state.privatePosts = posts;
      } else {
        const mergedPosts = [...state.privatePosts, ...posts];
        state.privatePosts = mergedPosts;
      }
    },
    setMentionPosts: (
      state,
      {
        payload: { posts, reset = false },
      }: PayloadAction<{
        posts: PostType[];
        reset?: boolean;
      }>
    ) => {
      if (reset) {
        state.mentionPosts = posts;
      } else {
        const mergedPosts = [...state.mentionPosts, ...posts];
        state.mentionPosts = mergedPosts;
      }
    },
    setActivityPosts: (
      state,
      {
        payload: { posts, reset = false },
      }: PayloadAction<{
        posts: PostType[];
        reset?: boolean;
      }>
    ) => {
      if (reset) {
        state.activityPosts = posts;
      } else {
        const mergedPosts = [...state.activityPosts, ...posts];
        state.activityPosts = mergedPosts;
      }
    },
    togglePostLike: (
      state,
      { payload: { postId } }: PayloadAction<{ postId: string }>
    ) => {
      const updatedPublicPosts = state.publicPosts.map((post) =>
        togglePostLikeCb(post, postId)
      );
      const updatedPrivatePosts = state.privatePosts.map((post) =>
        togglePostLikeCb(post, postId)
      );
      const updatedMentionPosts = state.mentionPosts.map((post) =>
        togglePostLikeCb(post, postId)
      );
      const updatedActivityPosts = state.activityPosts.map((post) =>
        togglePostLikeCb(post, postId)
      );

      state.publicPosts = updatedPublicPosts;
      state.privatePosts = updatedPrivatePosts;
      state.mentionPosts = updatedMentionPosts;
      state.activityPosts = updatedActivityPosts;
    },
    addComment: (
      state,
      { payload: { postId } }: PayloadAction<{ postId: string }>
    ) => {
      const updatedPublicPosts = state.publicPosts.map((post) =>
        addCommentCb(post, postId)
      );
      const updatedPrivatePosts = state.privatePosts.map((post) =>
        addCommentCb(post, postId)
      );
      const updatedMentionPosts = state.mentionPosts.map((post) =>
        addCommentCb(post, postId)
      );
      const updatedActivityPosts = state.activityPosts.map((post) =>
        addCommentCb(post, postId)
      );
      state.publicPosts = updatedPublicPosts;
      state.privatePosts = updatedPrivatePosts;
      state.mentionPosts = updatedMentionPosts;
      state.activityPosts = updatedActivityPosts;
    },
    deleteComment: (
      state,
      { payload: { postId } }: PayloadAction<{ postId: string }>
    ) => {
      const updatedPublicPosts = state.publicPosts.map((post) =>
        deleteCommentCb(post, postId)
      );
      const updatedPrivatePosts = state.privatePosts.map((post) =>
        deleteCommentCb(post, postId)
      );
      const updatedMentionPosts = state.mentionPosts.map((post) =>
        deleteCommentCb(post, postId)
      );
      const updatedActivityPosts = state.activityPosts.map((post) =>
        deleteCommentCb(post, postId)
      );
      state.publicPosts = updatedPublicPosts;
      state.privatePosts = updatedPrivatePosts;
      state.mentionPosts = updatedMentionPosts;
      state.activityPosts = updatedActivityPosts;
    },
    deletePost: (
      state,
      { payload: { postId } }: PayloadAction<{ postId: string }>
    ) => {
      const updatedPublicPosts = state.publicPosts.filter((post) =>
        deletePostCb(post, postId)
      );
      const updatedPrivatePosts = state.privatePosts.filter((post) =>
        deletePostCb(post, postId)
      );
      const updatedMentionPosts = state.mentionPosts.filter((post) =>
        deletePostCb(post, postId)
      );
      const updatedActivityPosts = state.activityPosts.filter((post) =>
        deletePostCb(post, postId)
      );
      state.publicPosts = updatedPublicPosts;
      state.privatePosts = updatedPrivatePosts;
      state.mentionPosts = updatedMentionPosts;
      state.activityPosts = updatedActivityPosts;
    },
  },
});

export const {
  setPublicPosts,
  setPrivatePosts,
  setMentionPosts,
  setActivityPosts,
  togglePostLike,
  deletePost,
  addComment,
  deleteComment,
} = feedSlice.actions;

export default feedSlice.reducer;
