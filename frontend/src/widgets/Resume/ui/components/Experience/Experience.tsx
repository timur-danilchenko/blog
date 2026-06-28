import dayjs from 'dayjs';
import { FC } from 'react';

import { IResumeExperience, MONTH_FORMAT } from 'shared/types';

import { Row } from 'widgets/Row';
import { Block } from 'widgets/Block';
import { Header } from 'widgets/Header';
import { Bubble } from 'widgets/Bubble';

import cls from './Experience.module.scss';

interface ExperienceProps {
  experience: IResumeExperience[] | null;
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
  if (experience === null || experience === undefined) {
    return <Block className='width4'>Опыт не подгрузился</Block>;
  }

  return (
    <Block className='width4'>
      <Header
        header='Experience'
        underline
      />
      {experience.map((item) => (
        <div
          key={item.name}
          className={cls.wrapper}
        >
          <Row className={cls.spcbtwn}>
            <div className={cls.left}>{item.name}</div>
            <div className={cls.right}>{item.location}</div>
          </Row>
          <Row className={cls.spcbtwn}>
            <div className={cls.left}>{item.position}</div>
            <div className={cls.right}>
              {dayjs(item.since).format(MONTH_FORMAT)}-{dayjs(item.until).format(MONTH_FORMAT)}
            </div>
          </Row>
          <Row className={cls.tools}>
            {item.stack.map((s) => (
              <Bubble content={s} />
            ))}
          </Row>

          <div>
            <ul className={cls.content}>
              {item.details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Block>
  );
};
