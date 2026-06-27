import { createSelector } from '@reduxjs/toolkit';
import { RootReducer } from 'app/store';

export const selectResumeSchemaData = (state: RootReducer) => state.resume;

export const selectResume = createSelector(selectResumeSchemaData, (data) => data.resume);

export const selectResumeStatus = createSelector(
  selectResumeSchemaData,
  (data) => data.resumeStatus,
);

export const selectResumeError = createSelector(selectResumeSchemaData, (data) => data.resumeError);
