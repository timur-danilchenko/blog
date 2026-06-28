import { FC } from 'react';

import { IResumeSkills } from 'shared/types';

import { Row } from 'widgets/Row';
import { Block } from 'widgets/Block';
import { Header } from 'widgets/Header';
import { Bubble } from 'widgets/Bubble';

import cls from './Skills.module.scss';
import { classNames } from 'shared/lib';

interface SkillsProps {
  skills: IResumeSkills | null;
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  if (skills === undefined || skills === null)
    return <Block className='width4'>Навыки не загрузились</Block>;

  return (
    <Block className='width4'>
      <Header
        header='Skills'
        underline
      />
      <div>
        {Object.entries(skills).map((v) => (
          <Row className={cls.padding}>
            <div className={cls.title}>{`${v[0]}:`}</div>
            <div className={cls.bubbleline}>
              {v[1].map((skill) => (
                <Bubble content={skill} />
              ))}
            </div>
          </Row>
        ))}
      </div>
    </Block>
  );
};
