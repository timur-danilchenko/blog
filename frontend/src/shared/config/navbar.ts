import { AppRoutes } from 'shared/consts';
import { INavbarConfig, NavbarKeys } from 'shared/types/navbar/navbar';

export const navbarConfig: INavbarConfig[] = [
  {
    text: NavbarKeys.root,
    link: AppRoutes.ROOT,
  },
  {
    text: NavbarKeys.posts,
    link: AppRoutes.POSTS,
  },
];
