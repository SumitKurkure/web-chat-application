import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../chat/web-socket.service';
import * as io from 'socket.io-client';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public messageSend: any = [];
  public messageReceive: any = [];
  public message: any = "";
  private socket: any;
  constructor() {
    // let messageGot = socketService.getMessage();
    // this.messageReceive.push(messageGot);
    this.socket = new WebSocket("ws://localhost:8081");
    this.socket.onmessage = (event: any) => {
      this.messageReceive.push(event.data);
    };
  }
  ngOnInit(): void {
  }
  sendMessage() {
    if (this.message) {
      this.socket.send(this.message);
      this.messageSend.push(this.message);
      this.message = null;
    }
  }
}
// this if the vau that thye atre expectin g so we can 