import { FC } from 'react';
import { classNames } from 'shared/lib';

interface ProfilePhotoProps {}

export const ProfilePhoto: FC<ProfilePhotoProps> = () => {
  return (
    <div className={classNames('block', {}, ['width1'])}>
      <img src='https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AValeriy_Konovalyuk_3x4.jpg&ved=0CBYQjRxqFwoTCLj6r7iNqJUDFQAAAAAdAAAAABA4&opi=89978449'></img>
    </div>
  );
};
