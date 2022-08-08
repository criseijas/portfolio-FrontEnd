import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  empresaE: string = '';
  puestoE: string = '';
  anioE: string = '';
  tareasE: string = '';

  constructor(private expeServ: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.empresaE, this.puestoE, this.anioE, this.tareasE);
    this.expeServ.save(expe).subscribe(data => {
      alert("Experiencia añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("No autorizado");
      this.router.navigate(['']);
    }
    )
  }

}
