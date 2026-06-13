import type { Reducer, UnknownAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

const appReducer = combineReducers({
  posts: postsReducer,
})

export type RootReducer = ReturnType<typeof appReducer>;

const rootReducer: Reducer<RootReducer, UnknownAction> = (state, action) => {
  if (action.type === 'auth/resetState') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

