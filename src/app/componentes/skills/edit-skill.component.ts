import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillServiceService } from 'src/app/service/skill-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skills = null;

  constructor(private educaServ: SkillServiceService, private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educaServ.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Se produjo un error al modificar la skill");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educaServ.upDate(id, this.skill).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("Se produjo un error al modificar la skill");
      this.router.navigate(['']);
    })
  }

}
