import { FC } from 'react';

import { IPost } from 'shared/types';

import cls from './Post.module.scss';
import dayjs from 'dayjs';
import { Header } from 'widgets/Header';

interface PostProps {
  post: IPost;
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className={cls.wrapper}>
      {/* <Header className={cls.header}> */}
      <div className={cls.label}>{post.label}</div>
      <div>{dayjs(post.created_at).format('HH:mm DD.MM.YYYY')}</div>
      {/* </Header> */}
      <div className={cls.content}>
        <div>{post.content}</div>
      </div>
    </div>
  );
};
