import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/iniciar-sesion/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcercaDeService } from './servicios/acerca-de.service';
import { PortfolioService } from './servicios/portfolio.service';
import { EducacionService } from './servicios/educacion.service';
import { SkillsService } from './servicios/skills.service';
import { ProyectoService } from './servicios/proyectos.service';
import { PersonaService } from './servicios/persona.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { interceptorService } from './servicios/interceptor.service';
import { FooterService } from './servicios/footer.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { HerramientasService } from './servicios/herramientas.service';
import { CursosCertificacionesComponent } from './componentes/cursosCertificaciones/cursosCertificaciones.component';
import { CursoService } from './servicios/cursosCertificaciones.service';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    PorfolioComponent,
    FooterComponent,
    HerramientasComponent,
    CursosCertificacionesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AcercaDeService,
    PortfolioService,
    EducacionService,
    SkillsService,
    ProyectoService,
    PersonaService,
    FooterService,
    AutenticacionService,
    HerramientasService,
    CursoService,
    { provide: HTTP_INTERCEPTORS, useClass: interceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
