import { FC, PropsWithChildren } from 'react';

import cls from './Block.module.scss';
import { classNames } from 'shared/lib';

interface BlockProps extends PropsWithChildren {
  className?: string;
}

export const Block: FC<BlockProps> = ({ className, children }) => {
  return <div className={classNames(cls.block, {}, [className])}>{children}</div>;
};
