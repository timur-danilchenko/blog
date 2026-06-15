import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAllPosts, getAllPosts, Post } from 'entities/Post';
import { useAppDispatch } from 'shared/hooks';

import cls from './PostsPage.module.scss';

const PostsPage: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className={cls.content}>
      <div className={cls.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};

export default PostsPage;
