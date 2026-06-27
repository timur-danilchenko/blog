import { createSelector } from '@reduxjs/toolkit';

import { RootReducer } from 'app/store';

import { PostsSchema } from '../types/types';

export const selectPostsSchemaData = (state: RootReducer) => state.posts;

export const selectPosts = createSelector(selectPostsSchemaData, (data: PostsSchema) => data.posts);

export const selectPostsGetAllStatus = createSelector(
  selectPostsSchemaData,
  (data: PostsSchema) => data.getAllStatus,
);

export const selectPostsGetAllError = createSelector(
  selectPostsSchemaData,
  (data: PostsSchema) => data.getAllError,
);
