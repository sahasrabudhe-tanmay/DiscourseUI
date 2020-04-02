import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscourseDataService } from '../data/discourse-data.service';
import { UserResponse } from 'src/app/models/user-response';
import { ResponseStatus } from 'src/app/models/response-status';
import { PostResponse } from 'src/app/models/post-response';

@Injectable({
  providedIn: 'root'
})
export class DiscourseRestService {

  private defaultHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpService: HttpClient,
    private dataService: DiscourseDataService
  ) { }

  public loginUser(user: User) {
    return this.httpService.post<UserResponse>(this.dataService.DISCOURSE_RS_URL + 'user/login', user, this.defaultHeaders);
  }

  public registerUser(user: User) {
    return this.httpService.post<UserResponse>(this.dataService.DISCOURSE_RS_URL + 'user/register', user, this.defaultHeaders);
  }

  public checkUsernameAvailability(username: string) {
    return this.httpService.get<ResponseStatus>(this.dataService.DISCOURSE_RS_URL + '/user/check-availability/' + username, this.defaultHeaders);
  }

  public uploadImage(data) {
    return this.httpService.post(this.dataService.DISCOURSE_RS_URL + 'image/upload', data, {responseType: 'text'});
  }

  public getAllPosts() {
    return this.httpService.get<PostResponse>(this.dataService.DISCOURSE_RS_URL + '/post/all');
  }
  
}
