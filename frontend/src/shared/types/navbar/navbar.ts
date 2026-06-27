import type { AppRoutes } from 'shared/consts';

export enum NavbarKeys {
  resume = 'resume',
  posts = 'posts',
}

export interface INavbarConfig {
  text: NavbarKeys;
  link: AppRoutes;
}
