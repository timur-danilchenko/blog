import { POSTS_URL } from 'shared/config';
import { ApiClient } from './ApiClient';

class PostApiClient extends ApiClient {}

export const postApiClient = new PostApiClient(POSTS_URL);
