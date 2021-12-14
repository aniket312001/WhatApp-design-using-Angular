import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-people-chats',
  templateUrl: './people-chats.component.html',
  styleUrls: ['./people-chats.component.css']
})
export class PeopleChatsComponent implements OnInit {
  data 
  constructor(private service : ChatsService) { 

    this.data = service.getData()
  }

  ngOnInit(): void {
  }

}
