import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

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
  ];
  public showSettings: any = false;
  public tempChatList: any;
  public searchText: any;
  public openChat: any = {};
  constructor() {
  }

  ngOnInit(): void {
    this.initializeConnection();
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
  public userName = 'sumit';
  public message = '';
  public messageList: { message: string, userName: string, mine: boolean }[] = [];
  public socket: any;

  initializeConnection(){
    this.socket = io.io(`http://localhost:3000/`);
    // ?userName=${name}
    this.socket.emit('set-user-name', name);

    this.socket.on('message-broadcast', (data: { message: string, userName: string }) => {
      if (data) {
        this.messageList.push({ message: data.message, userName: data.userName, mine: false });
      }
    });
  }

  sendMessage(): void {
    try {
      this.socket.emit('message', this.message);
      this.messageList.push({ message: this.message, userName: this.userName, mine: true });
      this.message = '';
    } catch (error) {
      console.error(error);    
    }
  }
  openChatDashboard(chat:any){
    this.openChat = JSON.parse(JSON.stringify(chat));
  }
}
