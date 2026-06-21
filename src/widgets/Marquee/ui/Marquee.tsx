import { FC, useEffect, useRef } from 'react';
import cls from './Marquee.module.scss';

interface MarqueeProps {
  content: string[] | null;
}

export const Marquee: FC<MarqueeProps> = ({ content }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const runningRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const running = runningRef.current;

    if (!wrapper || !running) return;

    if (wrapper.clientWidth > running.clientWidth) {
      const times = Math.ceil(wrapper.clientWidth / running.clientWidth);
      if (wrapper.children.length >= times) return;
      for (var i = 0; i < times; ++i) {
        const clone = running.cloneNode(true);
        wrapper.appendChild(clone);
      }
    }
  }, [content]);

  return (
    <div
      className={cls.wrapper}
      ref={wrapperRef}
    >
      <div
        className={cls.running}
        ref={runningRef}
      >
        {content.length &&
          content.map((item, i) => (
            <div
              className={cls.item}
              key={`a-${i}`}
            >
              <span className={cls.text}>{item}</span>
              <span className={cls.delim}>|</span>
            </div>
          ))}
      </div>
    </div>
  );
};
