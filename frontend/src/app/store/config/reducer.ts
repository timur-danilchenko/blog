import type { Reducer, UnknownAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { resumeReducer } from 'entities/Resume';
import { postsReducer } from 'entities/Post';

const appReducer = combineReducers({
  posts: postsReducer,
  resume: resumeReducer,
});

export type RootReducer = ReturnType<typeof appReducer>;

const rootReducer: Reducer<RootReducer, UnknownAction> = (state, action): RootReducer => {
  return appReducer(state, action);
};

export default rootReducer;
