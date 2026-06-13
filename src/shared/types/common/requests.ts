export interface IPaginationResults<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export enum RequestStatus {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  error = 'error',
}
