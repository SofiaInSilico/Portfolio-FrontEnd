import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from './proyecto';
import { ProyectoService } from 'src/app/servicios/proyectos.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proyecto: Proyecto = new Proyecto();
proyectos: Proyecto[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;


constructor(private proyectoService:ProyectoService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createProyecto():void {
this.proyectoService.create(this.proyecto).subscribe(
data => {
this.proyectos.push(data);
this.proyecto = new Proyecto();
this.displayForm = false;
location.reload();
}
);
}

cargar(proyecto: Proyecto):void{
    var proyectoToUpdate=proyecto;
    this.proyectoService.update(proyecto.id,proyecto.nombreProyecto,proyecto.descripcionProyecto,proyecto.urlProyecto,proyecto.fechaProyecto,proyecto.urlImagen, proyectoToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteProyecto(proyecto: Proyecto):void {
this.proyectoService.delete(proyecto.id).subscribe(
data => {
this.proyectos = this.proyectos.filter(e => e !== proyecto);
this.displayDeleteForm = false;
}
);
location.reload();
}


ngOnInit(): void {
this.proyectoService.getAll().subscribe(
data => {
this.proyectos = data;
}
);
}
}
