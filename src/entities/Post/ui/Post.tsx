import { FC } from 'react';

import { IPost } from 'shared/types';

import cls from './Post.module.scss';

interface PostProps {
  post: IPost;
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className={cls.post}>
      <h3>{post.label}</h3>
      <p>{post.content}</p>
    </div>
  );
};
