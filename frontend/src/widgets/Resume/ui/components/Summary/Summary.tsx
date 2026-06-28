import { FC } from 'react';
import { IResumeSummary } from 'shared/types';

import { Block } from 'widgets/Block';

import cls from './Summary.module.scss';
import { Header } from 'widgets/Header';

interface SummaryProps {
  summary: IResumeSummary | null;
}

export const Summary: FC<SummaryProps> = ({ summary }) => {
  return (
    <Block className={'width3'}>
      <Header
        header='Summary'
        underline
      />
      <div className={cls.content}>{summary}</div>
    </Block>
  );
};
