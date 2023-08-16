import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public chatList: any = [
    {
      name: 'Sumit Kurkure',
      message: 'Hi Nikhil',
      time: '4:20'
    },
    {
      name: 'Nikhil Sharma',
      message: 'Hi Sumit , i attached Documentation linked below you can find in mail',
      time: '4:20'
    },
    {
      name: 'Akash Kapil',
      message: 'Hi Nikhil',
      time: '4:20'
    },
    {
      name: 'Priya Gupta',
      message: 'Hi Sumit , i attached Documentation linked below you can find in mail',
      time: '4:20'
    }
  ];
  public showSettings: any = false;
  public tempChatList: any;
  public searchText: any;
  constructor() {
    var sock = new WebSocket("wss://demo.piesocket.com");
    sock.onopen = function (event) {
      console.log(event);
      sock.send("HI Sumit");
    }
    sock.onmessage = function (event) {
      console.log(event)
    }
  }

  ngOnInit(): void {
    this.tempChatList = this.chatList;
  }
  openSetting() {
    try {
      this.showSettings = !this.showSettings;
      if (this.showSettings) {

      }
    } catch (error) {
      console.error(error);
    }
  }
  onSearch(value: any) {
    let arr: any = [];
    this.tempChatList.forEach((list: any) => {
      if (list.name.indexOf(value) > -1) {
        arr.push(list);
      } else {
        this.chatList = this.tempChatList;
      }
    })
    this.chatList = arr;
  }

}
