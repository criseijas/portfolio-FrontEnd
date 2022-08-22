import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillServiceService } from 'src/app/service/skill-service.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS: string = '';
  porcentajeS: string = '';

  constructor(private skillServ: SkillServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombreS, this.porcentajeS);

    this.skillServ.save(skill).subscribe(
      data => {
        alert("habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo añadir la habilidad");
        this.router.navigate(['']);
      }
    );
  }

}
