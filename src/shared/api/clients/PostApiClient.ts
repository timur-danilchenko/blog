import { ApiClient } from './ApiClient';

class PostApiClient extends ApiClient {}

export const postApiClient = new PostApiClient('posts');
