import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResumeSchema } from '../types/types';
import { getResumeSummary } from './thunks/GetResumeSummaryThunk';
import { IResume, RequestStatus } from 'shared/types';

const initialState: ResumeSchema = {
  resume: null,
  resumeStatus: RequestStatus.idle,
  resumeError: null,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResumeSummary.pending, (state: ResumeSchema) => {
      state.resumeStatus = RequestStatus.pending;
    });
    builder.addCase(
      getResumeSummary.fulfilled,
      (state: ResumeSchema, action: PayloadAction<IResume>) => {
        state.resume = action.payload;
        state.resumeStatus = RequestStatus.success;
      },
    );
    builder.addCase(getResumeSummary.rejected, (state: ResumeSchema, action) => {});
  },
});

export const { reducer: resumeReducer, actions: resumeActions } = resumeSlice;
