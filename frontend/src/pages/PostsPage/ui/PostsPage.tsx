import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAllPosts, getAllPosts, Post } from 'entities/Post';
import { useAppDispatch } from 'shared/hooks';

import cls from './PostsPage.module.scss';
import { Marquee } from 'widgets/Marquee';

const PostsPage: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);

  const content = ['super', 'long', 'line', 'with'];

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Marquee content={content} />
      <div className='page'>
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
    </>
  );
};

export default PostsPage;
