export interface IPaginationResults<T> {
  total: number;
  page: number;
  size: number;
  items: T[];
}

export enum RequestStatus {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  error = 'error',
}
