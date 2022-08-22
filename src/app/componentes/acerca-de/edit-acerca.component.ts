import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {

  per: Persona = null;

  constructor(private persoServ: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoServ.detail(id).subscribe(
      data => {
        this.per = data;
      }, err => {
        alert("Se produjo un error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoServ.upDate(id, this.per).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No esta autorizado para modificar la persona");
        this.router.navigate(['']);
      })
  }


}
