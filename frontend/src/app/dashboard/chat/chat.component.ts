import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

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
  userName = '';
  message = '';
  messageList: { message: string, userName: string, mine: boolean }[] = [];
  socket: any;
  
  userNameUpdate(name: string): void {
    this.socket = io.io(`http://localhost:3000/?userName=${name}`);
    this.userName = name;

    this.socket.emit('set-user-name', name);

    this.socket.on('message-broadcast', (data: { message: string, userName: string }) => {
      if (data) {
        this.messageList.push({ message: data.message, userName: data.userName, mine: false });
      }
    });
  }

  sendMessage(): void {
    this.socket.emit('message', this.message);
    this.messageList.push({ message: this.message, userName: this.userName, mine: true });
    this.message = '';
  }
}
