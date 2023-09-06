import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('registerForm') registerForm: NgForm;
  public tabs: any = [
    {
      label: 'Login',
      value: 'login',
      route: 'login'
    },
    {
      label: 'Register',
      value: 'register',
      route: 'register'
    }
  ];
  public choosenTab: any = 'login';
  public loginData: any = {
    usernanme: '',
    password: ''
  }
  public registerData: any = {
    name: '',
    mobile: '',
    email: '',
    password: '',
  }
  public loaders: any = {
    show: false
  }
  constructor(private router: Router) {
  }
  ngOnInit() {

  }
  login() {
    this.loaders.show = true;
    setTimeout(() => {
      this.loaders.show = false;
      this.router.navigateByUrl('/app/chat-room');
    }, 3000);

  }
  register() {
  }
  switchTabs(tab: any) {
    this.choosenTab = tab?.value;
  }
}
