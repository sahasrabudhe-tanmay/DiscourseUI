import { ResponseStatus } from './response-status';
import { User } from './user';

export class UserResponse {

    responseStatus: ResponseStatus;
    user: User;
    token: string;

}
