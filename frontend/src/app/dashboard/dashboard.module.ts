import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChatComponent } from './chat/chat.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsComponent } from './chat/settings/settings.component';
import { ChatSidebarComponent } from './chat/chat-sidebar/chat-sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    VideoComponent,
    SettingsComponent,
    ChatSidebarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule,
    FormsModule
    
  ]
})
export class DashboardModule { }
