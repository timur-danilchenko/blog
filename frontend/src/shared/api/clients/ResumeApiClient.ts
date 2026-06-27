import { RESUME_URL } from 'shared/config';
import { ApiClient } from './ApiClient';
import { AxiosResponse } from 'axios';
import { IResume } from 'shared/types';

class ResumeApiClient extends ApiClient {
  public async summary(): Promise<AxiosResponse<IResume>> {
    return await this.axios.get(`${this.url}/summary`);
  }
}

export const resumeApiClient = new ResumeApiClient(RESUME_URL);
