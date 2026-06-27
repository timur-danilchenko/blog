import { FC } from 'react';
import { classNames } from 'shared/lib';
import { IResumeSkills } from 'shared/types';
import cls from './Skills.module.scss';
import { Row } from 'widgets/Row';

interface SkillsProps {
  skills: IResumeSkills[] | null;
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  if (skills === undefined || skills === null)
    return <div className={classNames('block', {}, ['width4'])}>Навыки не загрузились</div>;

  return (
    <div className={classNames('block', {}, ['width4'])}>
      <div className={cls.header}>Skills</div>
      {/* {Array(skills.entries()).map((a) => a)} */}
    </div>
  );
};
