import { FC } from 'react';
import { classNames } from 'shared/lib';
import { IResumeEducation, MONTH_FORMAT } from 'shared/types';

import cls from './Education.module.scss';
import dayjs from 'dayjs';
import { Row } from 'widgets/Row';

interface EducationProps {
  education: IResumeEducation[] | null;
}

export const Education: FC<EducationProps> = ({ education }) => {
  if (education === undefined || education === null) {
    return <div className={classNames('block', {}, ['width4'])}>Образование не подгрузилось</div>;
  }
  return (
    <div className={classNames('block', {}, ['width4', cls.content])}>
      <div className={cls.header}>Education</div>
      <ul className={cls.content}>
        {education.map((item) => (
          <li key={item.degree}>
            <Row className={cls.spcbtwn}>
              <div>
                {item.specialty} ({item.degree})
              </div>
              <div>{item.location}</div>
            </Row>
            <Row className={cls.spcbtwn}>
              <div>{item.university}</div>
              {dayjs(item.since).format(MONTH_FORMAT)}-{dayjs(item.until).format(MONTH_FORMAT)}
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
};
