import { FC } from 'react';
import { IResume } from 'shared/types';

import { Experience, ProfilePhoto, Summary } from './components';

import cls from './Resume.module.scss';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';

interface ResumeProps {
  resume: IResume | null;
}

export const Resume: FC<ResumeProps> = ({ resume }) => {
  return (
    <div className='page'>
      <div className='content'>
        <div className={cls.row}>
          <ProfilePhoto />
          <Summary summary={resume?.summary} />
        </div>
        <div className={cls.row}>
          <Education education={resume?.education} />
        </div>
        <div className={cls.row}>
          <Experience experience={resume?.experience} />
        </div>
        <div className={cls.row}>
          <Skills skills={resume?.skills} />
        </div>
      </div>
    </div>
  );
};
