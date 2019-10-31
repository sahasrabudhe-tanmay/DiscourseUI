import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class DiscourseDataService {

  user: User = new User();

  constructor() { }
}
