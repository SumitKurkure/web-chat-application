import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public pinnedchatList: any = [
    {
      name: 'Sumit Kurkure',
      time: '4:20'
    },
    {
      name: 'Sumit Kurkure',
      time: '4:20'
    }
  ];
  public showSettings: any = false;

  constructor() { }

  ngOnInit(): void {
  }
  openSetting() {
    try {
      this.showSettings = !this.showSettings;
      if(this.showSettings){
        
      }
    } catch (error) {
      console.error(error);
    }
  }
}
