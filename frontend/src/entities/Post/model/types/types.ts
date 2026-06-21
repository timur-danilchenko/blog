import { IPost, RejectedDataType, RequestStatus } from 'shared/types';

export interface PostsSchema {
  posts: IPost[];
  getAllStatus: RequestStatus | null;
  getAllError: RejectedDataType | null;
}
