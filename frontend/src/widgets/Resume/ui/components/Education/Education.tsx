import { FC } from 'react';
import dayjs from 'dayjs';

import { IResumeEducation, MONTH_FORMAT } from 'shared/types';

import { Row } from 'widgets/Row';
import { Block } from 'widgets/Block';
import { Header } from 'widgets/Header';

import cls from './Education.module.scss';

interface EducationProps {
  education: IResumeEducation[] | null;
}

export const Education: FC<EducationProps> = ({ education }) => {
  if (education === undefined || education === null) {
    return <Block className='width4'>Образование не подгрузилось</Block>;
  }
  return (
    <Block className='width4'>
      <Header
        header='Education'
        underline
      />
      <div className={cls.content}>
        <ul>
          {education.map((item) => (
            <div className={cls.wrapper}>
              <li key={item.degree}>
                <Row className={cls.spcbtwn}>
                  <div>
                    {item.specialty} ({item.degree})
                  </div>
                  <div className={cls.right}>{item.location}</div>
                </Row>
                <Row className={cls.spcbtwn}>
                  <div>{item.university}</div>
                  <div className={cls.right}>
                    {dayjs(item.since).format(MONTH_FORMAT)}-
                    {dayjs(item.until).format(MONTH_FORMAT)}
                  </div>
                </Row>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </Block>
  );
};
