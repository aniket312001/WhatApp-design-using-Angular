import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples-headingbar',
  templateUrl: './peoples-headingbar.component.html',
  styleUrls: ['./peoples-headingbar.component.css']
})
export class PeoplesHeadingbarComponent implements OnInit {

  constructor() { }
  status="status"
  new_chat="new Chat"
  menu="menu"
  ngOnInit(): void {
  }

}
