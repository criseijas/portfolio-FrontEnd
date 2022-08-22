import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/model/header';
import { HeaderServiceService } from 'src/app/service/header-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header = new Header("", "", "", "", "");


  isLogged = false;

  constructor(public headerServ: HeaderServiceService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getData();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  logIn() {
    this.router.navigate(['/login']);
  }
  getData() {
    this.headerServ.getPerfil().subscribe(data => { this.header = data });
  }


}




