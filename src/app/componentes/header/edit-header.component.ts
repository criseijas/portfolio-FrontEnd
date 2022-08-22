import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/model/header';
import { HeaderServiceService } from 'src/app/service/header-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  head : Header =null;

  constructor(private headerServ: HeaderServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.headerServ.detail(id).subscribe(
      data =>{
        this.head = data;
      }, err =>{
        alert("Se produjo un error realizar la modificación");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.headerServ.update(id, this.head).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("No esta autorizado para realizar modificaciones");
      this.router.navigate(['']);
    })
  }


}
