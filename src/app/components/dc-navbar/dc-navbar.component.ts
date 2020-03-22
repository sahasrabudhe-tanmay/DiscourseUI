import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dc-navbar',
  templateUrl: './dc-navbar.component.html',
  styleUrls: ['./dc-navbar.component.css']
})
export class DcNavbarComponent implements OnInit {

  @Input() loggedIn = false;
  @Output() logoutEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.logoutEvent.emit();
  }

}
