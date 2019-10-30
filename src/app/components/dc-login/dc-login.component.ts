import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dc-login',
  templateUrl: './dc-login.component.html',
  styleUrls: ['./dc-login.component.css']
})
export class DcLoginComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.user);
  }

}
