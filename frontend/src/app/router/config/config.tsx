import { PathRouteProps } from 'react-router-dom';

import { PostsPage } from 'pages/PostsPage';
import { ResumePage } from 'pages/ResumePage';
import { AppRoutes } from 'shared/consts';

interface AppRouteProps extends PathRouteProps {
  path: string;
  name: string;
  isPublic?: boolean;
  pageClassname?: string;
}

export const config: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.POSTS]: {
    name: 'posts',
    path: AppRoutes.POSTS,
    element: <PostsPage />,
    isPublic: true,
    pageClassname: 'page-flex page-full',
  },
  [AppRoutes.RESUME]: {
    name: 'resume',
    path: AppRoutes.RESUME,
    element: <ResumePage />,
    isPublic: true,
    pageClassname: 'page-flex page-full',
  },
};
