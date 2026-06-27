import { IResume, RejectedDataType, RequestStatus } from 'shared/types';

export interface ResumeSchema {
  resume: IResume | null;
  resumeStatus: RequestStatus;
  resumeError: RejectedDataType | null;
}
