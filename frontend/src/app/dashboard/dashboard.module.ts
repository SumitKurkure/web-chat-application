import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ChatComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule,
  ]
})
export class DashboardModule { }
