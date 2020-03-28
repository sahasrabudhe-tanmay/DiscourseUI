import { Component, OnInit } from '@angular/core';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dc-home',
  templateUrl: './dc-home.component.html',
  styleUrls: ['./dc-home.component.css']
})
export class DcHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
