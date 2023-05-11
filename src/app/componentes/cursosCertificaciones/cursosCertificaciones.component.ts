import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Curso } from './cursosCertificaciones';
import { CursoService } from 'src/app/servicios/cursosCertificaciones.service';

@Component({
selector: 'app-cursosCertificaciones',
templateUrl: './cursosCertificaciones.component.html',
styleUrls: ['./cursosCertificaciones.component.css']
})
export class CursosCertificacionesComponent implements OnInit {

curso: Curso = new Curso();
cursos: Curso[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;
cargando = false;


constructor(private cursoService:CursoService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createCurso():void {
this.cargando = true;
this.cursoService.create(this.curso).subscribe(
data => {
this.cursos.push(data);
this.curso = new Curso();
this.displayForm = false;
setTimeout(() => {
    location.reload();
  }, 5000);
}
);
}

cargar(curso: Curso):void{
    var cursoToUpdate=curso;
    this.cursoService.update(curso.id,curso.urlImg,curso.titulo,curso.fecha,curso.urlCertificado, cursoToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteCurso(curso: Curso):void {
this.cargando = true;
this.cursoService.delete(curso.id).subscribe(
data => {
this.cursos = this.cursos.filter(e => e !== curso);
this.displayDeleteForm = false;
}
);
setTimeout(() => {
    location.reload();
  }, 5000);
}


ngOnInit(): void {
this.cursoService.getAll().subscribe(
data => {
this.cursos = data;
}
);
}
}