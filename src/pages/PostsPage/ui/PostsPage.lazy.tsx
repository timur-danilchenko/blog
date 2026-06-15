import { lazy } from 'react';

export const PostsPageLazy = lazy(() => {
  return import('./PostsPage');
});
