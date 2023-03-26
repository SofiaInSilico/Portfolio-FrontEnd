import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from './experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

experiencia: Experiencia = new Experiencia();
experiencias: Experiencia[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;


constructor(private experienciaService:ExperienciaService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createExperiencia():void {
this.experienciaService.create(this.experiencia).subscribe(
data => {
this.experiencias.push(data);
this.experiencia = new Experiencia();
this.displayForm = false;
location.reload();
}
);
}

cargar(experiencia: Experiencia):void{
    var experienciaToUpdate=experiencia;
    this.experienciaService.update(experiencia.id,experiencia.nombreEmpresa,experiencia.periodo,experiencia.funcion,experiencia.tituloPuesto,experiencia.logoEmpresa, experienciaToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteExperiencia(experiencia: Experiencia):void {
this.experienciaService.delete(experiencia.id).subscribe(
data => {
this.experiencias = this.experiencias.filter(e => e !== experiencia);
this.displayDeleteForm = false;
}
);
location.reload();
}


ngOnInit(): void {
this.experienciaService.getAll().subscribe(
data => {
this.experiencias = data;
}
);
}
}