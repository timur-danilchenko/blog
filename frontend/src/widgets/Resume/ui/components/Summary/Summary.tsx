import { FC } from 'react';
import { IResumeSummary } from 'shared/types';

import { Block } from 'widgets/Block';

interface SummaryProps {
  summary: IResumeSummary | null;
}

export const Summary: FC<SummaryProps> = ({ summary }) => {
  return (
    <Block
      className={'width3'}
      title={'Summary'}
      content={summary}
    />
  );
};
