import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillServiceService } from 'src/app/service/skill-service.service';

import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(public skillServ: SkillServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarSkills(): void {
    this.skillServ.lista().subscribe(data => { this.skills = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillServ.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )

    }
  }

}
