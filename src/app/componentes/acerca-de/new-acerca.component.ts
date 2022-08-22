import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-acerca',
  templateUrl: './new-acerca.component.html',
  styleUrls: ['./new-acerca.component.css']
})
export class NewAcercaComponent implements OnInit {

  nombre: string = "";
  apellido: string = "";
  titulo: string = "";
  descripcion: string = "";

  constructor(private persoServ: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Persona(this.nombre, this.apellido, this.titulo, this.descripcion);
    this.persoServ.save(expe).subscribe(data => {
      alert("Persona añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("No autorizado");
      this.router.navigate(['']);
    }
    )
  }

}
