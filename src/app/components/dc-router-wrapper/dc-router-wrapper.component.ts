import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-router-wrapper',
  templateUrl: './dc-router-wrapper.component.html',
  styleUrls: ['./dc-router-wrapper.component.css']
})
export class DcRouterWrapperComponent implements OnInit {

  constructor(
    public dataService: DiscourseDataService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.cookieService.get('token')) {
      this.dataService.isLoggedIn = true;
    } else {
      this.dataService.isLoggedIn = false;
    }
  }

  logoutUser() {
    this.dataService.isLoggedIn = false;
    this.dataService.user = new User();
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

}
