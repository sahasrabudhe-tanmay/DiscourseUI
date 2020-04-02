import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class DiscourseDataService {

  user: User = new User();
  DISCOURSE_RS_URL = "http://localhost:8080/discourse-rs/";
  isLoggedIn = false;
  posts: Post[];
  token: string;

  constructor() { }
}
