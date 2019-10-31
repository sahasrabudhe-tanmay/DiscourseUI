import { Component, OnInit } from '@angular/core';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';
import { EncryptionService } from 'src/app/services/util/encryption.service';
import { DiscourseRestService } from 'src/app/services/rest/discourse-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-login',
  templateUrl: './dc-login.component.html',
  styleUrls: ['./dc-login.component.css']
})
export class DcLoginComponent implements OnInit {

  constructor(
    public dataService: DiscourseDataService,
    public encryptionService: EncryptionService,
    private discourseRestService: DiscourseRestService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.dataService.user.password = this.encryptionService.encrypt('123456$#@$^@1ERF', this.dataService.user.password);
    console.log(this.dataService.user);
    
    this.discourseRestService.loginUser(this.dataService.user).subscribe(userResponse => {
      console.log(userResponse);
      if (userResponse.responseStatus.status === 'SUCCESS') {
        this.dataService.user = userResponse.user;
        console.log(this.dataService.user);
        this.router.navigate(['']);
      } else {
        userResponse.responseStatus.messages.forEach(message => {
          console.log(message);
        })
      }
    });
  }

}
