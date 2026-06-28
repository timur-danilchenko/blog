import { FC, PropsWithChildren } from 'react';

import cls from './Row.module.scss';
import { classNames } from 'shared/lib';

interface RowProps extends PropsWithChildren {
  className?: string;
}

export const Row: FC<RowProps> = ({ children, className }) => {
  return <div className={classNames(cls.row, {}, [className])}>{children}</div>;
};
