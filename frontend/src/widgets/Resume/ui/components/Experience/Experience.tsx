import dayjs from 'dayjs';
import { FC } from 'react';

import { classNames } from 'shared/lib';
import { IResumeExperience, MONTH_FORMAT } from 'shared/types';

import cls from './Experience.module.scss';
import { Row } from 'widgets/Row';

interface ExperienceProps {
  experience: IResumeExperience[] | null;
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
  if (experience === null || experience === undefined) {
    return <div className={classNames('block', {}, ['width4'])}>Опыт не подгрузился</div>;
  }

  return (
    <div className={classNames('block', {}, ['width4'])}>
      <div className={cls.header}>Experience</div>
      {experience.map((item) => (
        <div key={item.name}>
          <Row className={cls.spcbtwn}>
            <div className={cls.bold}>{item.name}</div>
            <div>{item.location}</div>
          </Row>
          <Row className={cls.spcbtwn}>
            <div className={cls.bold}>
              {item.position} ({item.stack.join(', ')})
            </div>
            <div>
              {dayjs(item.since).format(MONTH_FORMAT)}-{dayjs(item.until).format(MONTH_FORMAT)}
            </div>
          </Row>

          <ul className={cls.content}>
            {item.details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
