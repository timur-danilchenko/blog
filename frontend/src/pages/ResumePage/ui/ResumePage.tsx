import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getResumeSummary, selectResume } from 'entities/Resume';
import { useAppDispatch } from 'shared/hooks';
import { Resume } from 'widgets/Resume';

// import cls from './ResumePage.module.scss';

const ResumePage = () => {
  const dispatch = useAppDispatch();
  const resume = useSelector(selectResume);

  useEffect(() => {
    dispatch(getResumeSummary());
  }, []);

  return <Resume resume={resume} />;
};

export default ResumePage;
