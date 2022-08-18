import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private expeServ: ExperienciaServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExpe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExpe(): void {
    this.expeServ.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expeServ.delete(id).subscribe(
        data => {
          this.cargarExpe();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )

    }
  }

}
