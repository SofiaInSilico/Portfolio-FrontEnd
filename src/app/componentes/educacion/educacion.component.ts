import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from './educacion';

@Component({
selector: 'app-educacion',
templateUrl: './educacion.component.html',
styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

educacion: Educacion = new Educacion();
educaciones: Educacion[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;


constructor(private educacionService:EducacionService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createEducacion():void {
this.educacionService.create(this.educacion).subscribe(
data => {
this.educaciones.push(data);
this.educacion = new Educacion();
this.displayForm = false;
location.reload();
}
);
}

cargar(educacion: Educacion):void{
    var educacionToUpdate=educacion;
    this.educacionService.update(educacion.id,educacion.nombreInstituto,educacion.fechaInicio,educacion.titulo,educacion.logo,educacion.urlCertificado, educacionToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteEducacion(educacion: Educacion):void {
this.educacionService.delete(educacion.id).subscribe(
data => {
this.educaciones = this.educaciones.filter(e => e !== educacion);
this.displayDeleteForm = false;
}
);
location.reload();
}


ngOnInit(): void {
this.educacionService.getAll().subscribe(
data => {
this.educaciones = data;
}
);
}
}