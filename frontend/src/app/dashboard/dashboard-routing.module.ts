import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    // path: '', component: DashboardComponent, children: [
      // { path: '', redirectTo: 'chat', pathMatch: 'full' },
      // { path: 'chat', component: ChatComponent, data: { page: 'chat' }},
      // { path: 'video', component: VideoComponent, data: { page: 'video' }},
    // ],
    // path : '' , component :ChatComponent ,pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
