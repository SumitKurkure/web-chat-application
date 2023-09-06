import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-chat-username',
  templateUrl: './chat-username.component.html',
  styleUrls: ['./chat-username.component.scss']
})
export class ChatUsernameComponent implements OnInit {
  @Output() userNameEvent = new EventEmitter();

  userName = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }

}

