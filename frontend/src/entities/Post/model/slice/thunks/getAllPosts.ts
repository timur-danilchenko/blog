import { createAsyncThunk } from '@reduxjs/toolkit';

import { postApiClient } from 'shared/api';
import { IPaginationResults, IPost } from 'shared/types';
import { ErrorType, RejectedDataType } from 'shared/types';

export const getAllPosts = createAsyncThunk<
  IPaginationResults<IPost>,
  void,
  { readonly rejectValue: RejectedDataType }
>('/posts/list', async (_, thunkApi) => {
  try {
    const response = await postApiClient.getAll<IPost>();
    return response.data;
  } catch (err: unknown) {
    const error = err as ErrorType;

    return thunkApi.rejectWithValue({
      messageError: error.message,
      status: error?.response.status,
      data: error?.response.data,
    });
  }
});
