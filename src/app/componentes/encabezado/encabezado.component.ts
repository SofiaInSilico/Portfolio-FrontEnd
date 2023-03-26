import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from './persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: Persona = new Persona();
  id:number=1;
  personas: Persona[] = [];
  displayUpdateForm: boolean = false;
  postId: any;
 
   constructor(private personaService:PersonaService, private router:Router, private activeRoute:ActivatedRoute, public autenticaticionService: AutenticacionService) { 
   }
 
  createPersona():void {
    this.personaService.create(this.persona).subscribe(
      data=> {
        this.personas.push(data);
        this.persona = new Persona();
        this.displayUpdateForm = false;
        location.reload();
      }
    )
  } 


  cargar(persona: Persona):void{
    var personaToUpdate=persona;
    this.personaService.update(persona.id,persona.nombre,persona.titulo,persona.urlPerfil, personaToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

   ngOnInit(): void {
    this.personaService.get(this.id).subscribe(
    data => {
    this.persona = data;
    }
    );
    this.personaService.getAll().subscribe(
    data => {
    this.personas = data;
    }
    );
    }

    redigirLogin() {
      this.router.navigate(['iniciar-sesion']);
    }
    
    

 }
