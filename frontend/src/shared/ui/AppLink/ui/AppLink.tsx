import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {}

export const AppLink: FC<AppLinkProps> = ({ to, children, ...other }) => {
  return (
    <Link
      to={to}
      className={cls.AppLink}
      draggable={false}
      {...other}
    >
      {children}
    </Link>
  );
};
