import { lazy } from 'react';

export const ResumePageLazy = lazy(() => {
  return import('./ResumePage');
});
