import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public pinnedchatList: any = [
    {
      name : 'Sumit Kurkure',
      time : '4:20'
    },
    {
      name : 'Sumit Kurkure',
      time : '4:20'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
