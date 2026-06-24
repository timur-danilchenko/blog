import type { AppRoutes } from 'shared/consts';

export enum NavbarKeys {
  root = 'root',
  posts = 'posts',
}

export interface INavbarConfig {
  text: NavbarKeys;
  link: AppRoutes;
}
