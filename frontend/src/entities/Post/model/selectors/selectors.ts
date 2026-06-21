import { createSelector } from '@reduxjs/toolkit';

import { RootReducer } from 'app/store';

import { PostsSchema } from '../types/types';

export const selectFullPostsData = (state: RootReducer) => state.posts;

export const selectAllPosts = createSelector(
  selectFullPostsData,
  (data: PostsSchema) => data.posts,
);

export const selectPostsGetAllStatus = createSelector(
  selectFullPostsData,
  (data: PostsSchema) => data.getAllStatus,
);

export const selectPostsGetAllError = createSelector(
  selectFullPostsData,
  (data: PostsSchema) => data.getAllError,
);
