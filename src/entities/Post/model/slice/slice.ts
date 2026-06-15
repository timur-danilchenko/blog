import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPost, RequestStatus, IPaginationResults } from 'shared/types';

import { getAllPosts } from './thunks/getAllPosts';

import { PostsSchema } from '../types/types';

const initialState: PostsSchema = {
  posts: [],
  getAllStatus: null,
  getAllError: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    clearGetAllError(state: PostsSchema): void {
      state.getAllError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state: PostsSchema) => {
      state.posts = [];
      state.getAllStatus = RequestStatus.pending;
    });
    builder.addCase(
      getAllPosts.fulfilled,
      (state: PostsSchema, action: PayloadAction<IPaginationResults<IPost>>) => {
        state.posts = action.payload.items;
        state.getAllStatus = RequestStatus.success;
        state.getAllError = null;
      },
    );
    builder.addCase(getAllPosts.rejected, (state: PostsSchema) => {
      state.getAllStatus = RequestStatus.error;
      state.getAllError = null;
    });
  },
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
