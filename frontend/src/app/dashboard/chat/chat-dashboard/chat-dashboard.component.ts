import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss']
})
export class ChatDashboardComponent implements OnInit {

  public userMessage :any = "";
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
    try {
      
    } catch (error) {
      console.error(error);
    }
  }
}
