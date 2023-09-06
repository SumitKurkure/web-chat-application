import { Component } from '@angular/core';
import { SocketIoConfig } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chatify';
  public config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
}
