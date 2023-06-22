import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigateByUrl('login');
    },5000);
  }

}
