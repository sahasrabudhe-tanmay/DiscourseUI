import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';

@Component({
  selector: 'app-dc-router-wrapper',
  templateUrl: './dc-router-wrapper.component.html',
  styleUrls: ['./dc-router-wrapper.component.css']
})
export class DcRouterWrapperComponent implements OnInit {

  constructor(
    public dataService: DiscourseDataService
  ) { }

  ngOnInit() {
  }

  logoutUser() {
    this.dataService.isLoggedIn = false;
    this.dataService.user = new User();
  }

}
