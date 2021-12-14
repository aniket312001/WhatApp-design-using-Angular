import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';
import { chat } from './chats';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mychats',
  templateUrl: './mychats.component.html',
  styleUrls: ['./mychats.component.css']
})
export class MychatsComponent implements OnInit {
  chat1:any
  data
  
  name :any
  constructor(private route: ActivatedRoute,private service: ChatsService) {
    this.data = service.getData()
  }
  
  ngOnInit(): void {
    
 
    

  this.route.paramMap.subscribe(params => {
    this.name = params.get("name")
    console.log(this.name)
    this.chat1 = this.data.find(data => data.name === this.name)
  })
  

  
  }
}
