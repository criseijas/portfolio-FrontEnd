import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaComponent } from './componentes/acerca-de/edit-acerca.component';
import { NewAcercaComponent } from './componentes/acerca-de/new-acerca.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/exp-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-laboral/new-experiencia.component';
import { EditFooterComponent } from './componentes/footer/edit-footer.component';
import { NewFooterComponent } from './componentes/footer/new-footer.component';
import { EditHeaderComponent } from './componentes/header/edit-header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'newedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path:'nuevaskill', component: NewSkillComponent },
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'nuevopro', component: NewProyectoComponent},
  {path:'editpro/:id', component: EditProyectoComponent},
  {path:'editper/:id', component: EditAcercaComponent},
  {path:'nuevaper', component: NewAcercaComponent},
  {path:'nuevoconta', component: NewFooterComponent},
  {path:'editconta/:id', component: EditFooterComponent},
  {path:'editheader/:id', component: EditHeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
