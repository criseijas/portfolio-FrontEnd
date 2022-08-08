import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  
  institucionEdu: string;
  tituloEdu: string;
  infoEdu: string;
  

  constructor(private educaServ: EducacionServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.institucionEdu, this.tituloEdu, this.infoEdu);
    this.educaServ.save(educ).subscribe(
      data => {
      alert("Educación añadida correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("No esta autorizado a agregar una educación");
      this.router.navigate(['']);
    }
    )
  }

}
