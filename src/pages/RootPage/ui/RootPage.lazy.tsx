import { lazy } from 'react';

export const RootPageLazy = lazy(() => {
  return import('./RootPage');
});
