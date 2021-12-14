import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-heading',
  templateUrl: './chat-heading.component.html',
  styleUrls: ['./chat-heading.component.css']
})
export class ChatHeadingComponent implements OnInit {

  constructor() { }
  @Input() data: any
  ngOnInit(): void {
  }

}
