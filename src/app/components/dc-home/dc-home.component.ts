import { Component, OnInit } from '@angular/core';
import { DiscourseRestService } from 'src/app/services/rest/discourse-rest.service';
import { DiscourseDataService } from 'src/app/services/data/discourse-data.service';

@Component({
  selector: 'app-dc-home',
  templateUrl: './dc-home.component.html',
  styleUrls: ['./dc-home.component.css']
})
export class DcHomeComponent implements OnInit {

  constructor(
    private restService: DiscourseRestService,
    public dataService: DiscourseDataService
  ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.restService.getAllPosts().subscribe(postResponse => {
      if(postResponse.responseStatus.status === 'FAILURE') {
        throw new Error();
      } else {
        this.dataService.posts = postResponse.posts;
      }
    });
  }

}
