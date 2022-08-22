import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/service/proyecto-service.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string = "";
  descripcionP: string = "";
  img: string = "";
  repo: string = "";

  constructor(private proServ: ProyectoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreP, this.descripcionP, this.img, this.repo);
    this.proServ.save(expe).subscribe(data => {
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("No autorizado");
      this.router.navigate(['']);
    }
    )
  }

}
