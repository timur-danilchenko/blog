import { AxiosResponse } from 'axios';

import { IPaginationResults } from 'shared/types';

import axiosInstance from '../base/axios';

export class ApiClient {
  axios = axiosInstance;

  url: string;
  constructor(url: string) {
    this.url = url;
  }
  public async getAll<T>(): Promise<AxiosResponse<IPaginationResults<T>>> {
    return await this.axios.get(this.url);
  }

  public async getById<T>(id: string): Promise<AxiosResponse<T>> {
    return await this.axios.get(`${this.url}/${id}`);
  }

  public async updateById<T>(id: string, data: T): Promise<AxiosResponse<T>> {
    return await this.axios.post(`${this.url}/${id}`, data);
  }

  public async deleteById(id: string): Promise<AxiosResponse<void>> {
    return await this.axios.delete(`${this.url}/${id}`);
  }

  public async create<T1, T2>(data: T1): Promise<AxiosResponse<T2>> {
    return await this.axios.post(`${this.url}`, data);
  }
}
