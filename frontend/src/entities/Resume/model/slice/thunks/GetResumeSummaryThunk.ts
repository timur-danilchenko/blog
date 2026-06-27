import { createAsyncThunk } from '@reduxjs/toolkit';
import { resumeApiClient } from 'shared/api';
import { ErrorType, IResume, RejectedDataType } from 'shared/types';

export const getResumeSummary = createAsyncThunk<
  IResume,
  void,
  { readonly rejectValue: RejectedDataType }
>('/resume/summary', async (_, thunkApi) => {
  try {
    const response = await resumeApiClient.summary();
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
