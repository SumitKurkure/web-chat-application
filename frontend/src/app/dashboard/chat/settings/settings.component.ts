import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settingMenu = [
    {
      label: 'Profile Picture',
      value: 'account',
      icon : 'fa fa-user'
    },
    {
      label: 'Delete Account',
      value: 'delete_account',
      icon : 'fa fa-trash'
    },
    {
      label : 'Block Contact',
      value : 'block_account',
      icon : 'fa fa-ban'
    },
    {
      label : 'Delete Chats',
      value : 'delete_chats',
      icon : 'fa fa-comment-slash'
    },
    {
      label: 'Logout',
      value : 'logout',
      icon : 'fa fa-arrow-right-from-bracket'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
