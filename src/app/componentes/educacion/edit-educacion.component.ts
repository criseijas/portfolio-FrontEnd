import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  editedu: Educacion = null;

  constructor(private educaServ: EducacionServiceService, private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educaServ.detail(id).subscribe(
      data =>{
        this.editedu = data;
      }, err =>{
        alert("Se produjo un error al modificar la educación");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educaServ.update(id, this.editedu).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("Se produjo un error al modificar la educación");
      this.router.navigate(['']);
    })
  }

}
