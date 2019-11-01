import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscourseDataService } from '../data/discourse-data.service';
import { UserResponse } from 'src/app/models/user-response';

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
  
}
