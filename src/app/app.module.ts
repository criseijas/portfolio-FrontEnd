import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './componentes/exp-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-laboral/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditAcercaComponent } from './componentes/acerca-de/edit-acerca.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewAcercaComponent } from './componentes/acerca-de/new-acerca.component';
import { NewFooterComponent } from './componentes/footer/new-footer.component';
import { EditFooterComponent } from './componentes/footer/edit-footer.component';
import { EditHeaderComponent } from './componentes/header/edit-header.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExpLaboralComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaComponent,
    NewSkillComponent,
    EditSkillComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewAcercaComponent,
    NewFooterComponent,
    EditFooterComponent,
    EditHeaderComponent,
    
    
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
