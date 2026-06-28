import { FC } from 'react';

import cls from './Bubble.module.scss';
import { classNames } from 'shared/lib';

interface BubbleProps {
  content: string;
  color?: string;
}

export const Bubble: FC<BubbleProps> = ({ content, color }) => {
  return (
    <div
      className={classNames(
        cls.bubble,
        {
          'background-color': color,
        },
        [],
      )}
    >
      {content}
    </div>
  );
};
