import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/service/proyecto-service.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proye: Proyecto = null;

  constructor(private proServ: ProyectoServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proServ.detail(id).subscribe(
      data => {
        this.proye = data;
      }, err => {
        alert("Se produjo un error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proServ.upDate(id, this.proye).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No esta autorizado para modificar el proyecto");
        this.router.navigate(['']);
      })
  }

}
