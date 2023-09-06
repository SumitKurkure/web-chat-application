import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: any;

  constructor() {
    this.socket = new WebSocket("ws://localhost:8081");
  }
  sendMessage(message: any) {
    if (message) {
      this.socket.send("message", message);
    }
  }
  getMessage(): any {
    this.socket.onmessage = (event: any) => {
      return event.data;
    };
  }
}
