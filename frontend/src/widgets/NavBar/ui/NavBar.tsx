import { FC } from 'react';
import cls from './NavBar.module.scss';
import { AppRoutes } from 'shared/consts';
import { useNavigate } from 'react-router-dom';
import { navbarConfig } from 'shared/config/navbar';
import { AppLink } from 'shared/ui/AppLink';

interface RouteInfo {
  to: AppRoutes;
  text: string;
}

export const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = ({ to }) => {
    navigate(to);
  };

  return (
    <div className={cls.navbar}>
      <div className={cls.card}>
        {navbarConfig.map((item) => {
          return (
            <AppLink
              key={item.text}
              to={item.link}
              onClick={() => handleLinkClick({ to: item.link })}
              className={cls.item}
            >
              {item.text}
            </AppLink>
          );
        })}
      </div>
    </div>
  );
};
