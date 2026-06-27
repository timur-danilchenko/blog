import { FC, PropsWithChildren, ReactNode } from 'react';

import cls from './Row.module.scss';
import { classNames } from 'shared/lib';

interface RowProps extends PropsWithChildren {
  className?: string;
  children: ReactNode | null;
}

export const Row: FC<RowProps> = ({ children, className }) => {
  return <div className={classNames(cls.row, {}, [className])}>{children}</div>;
};
