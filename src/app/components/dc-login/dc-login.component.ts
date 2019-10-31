import { Component, OnInit } from '@angular/core';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';
import { EncryptionService } from 'src/app/services/util/encryption.service';

@Component({
  selector: 'app-dc-login',
  templateUrl: './dc-login.component.html',
  styleUrls: ['./dc-login.component.css']
})
export class DcLoginComponent implements OnInit {

  constructor(
    public dataService: DiscourseDataService,
    public encryptionService: EncryptionService
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.dataService.user.password = this.encryptionService.encrypt('123456$#@$^@1ERF', this.dataService.user.password);
    console.log(this.dataService.user);
    this.dataService.user.password = this.encryptionService.decrypt('123456$#@$^@1ERF', this.dataService.user.password);
    console.log(this.dataService.user);
  }

}
