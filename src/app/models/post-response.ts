import { ResponseStatus } from './response-status';
import { Post } from './post';

export class PostResponse {
    responseStatus: ResponseStatus;
    posts: Post[] = [];
}
