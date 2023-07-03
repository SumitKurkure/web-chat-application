import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChatDashboardComponent } from './chat/chat-dashboard/chat-dashboard.component';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  declarations: [
    ChatComponent,
    VideoComponent,
    ChatDashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule,
    
  ]
})
export class DashboardModule { }
