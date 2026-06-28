import { FC } from 'react';

import cls from './Header.module.scss';
import { classNames } from 'shared/lib';

interface HeaderProps {
  header: string;
  underline?: boolean;
}

export const Header: FC<HeaderProps> = ({ header, underline }) => {
  return (
    <div
      className={classNames(
        cls.header,
        {
          [cls.underline]: underline,
        },
        [],
      )}
    >
      {header}
    </div>
  );
};
