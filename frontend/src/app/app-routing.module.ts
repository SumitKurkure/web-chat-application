import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './dashboard/video/video.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {
        path: 'app', component: DashboardComponent, children: [
          { path: '', redirectTo: 'chat', pathMatch: 'full' },
          { path: 'chat', component: ChatComponent },
          { path: 'video', component: VideoComponent },
        ]
      },
      { path: '**', component: EmptyStateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
