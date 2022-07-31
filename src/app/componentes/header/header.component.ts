import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//se injecta el serv de ruteo
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    this.router.navigate(['/login']);
  }

}
