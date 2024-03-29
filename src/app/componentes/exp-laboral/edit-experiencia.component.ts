import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab : Experiencia =null;

  constructor(private expeServ: ExperienciaServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expeServ.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Se produjo un error al modificar la experiencia");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expeServ.update(id, this.expLab).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("No esta autorizado para modificar la experiencia");
      this.router.navigate(['']);
    })
  }

}
