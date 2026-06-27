import { FC } from 'react';

import cls from './Block.module.scss';
import { classNames } from 'shared/lib';

interface BlockProps {
  title: string;
  content: string;
  className?: string;
}

export const Block: FC<BlockProps> = ({ title, content, className }) => {
  return (
    <div className={classNames(cls.block, {}, [className])}>
      <div className={cls.title}>{title}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
};
