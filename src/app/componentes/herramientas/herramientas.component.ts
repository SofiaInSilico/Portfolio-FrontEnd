import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HerramientasService } from 'src/app/servicios/herramientas.service';
import { Herramientas } from './herramientas';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

herramienta: Herramientas = new Herramientas();
herramientas: Herramientas[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;
cargando = false;

constructor(private herramientasService:HerramientasService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createHerramientas():void {
  this.cargando = true;
this.herramientasService.create(this.herramienta).subscribe(
data => {
this.herramientas.push(data);
this.herramienta = new Herramientas();
this.displayForm = false;
this.router.navigate(['porfolio'])
}
);
setTimeout(() => {
  location.reload();
}, 5000);
}

cargar(herramienta: Herramientas):void{
    var herramientaToUpdate=herramienta;
    this.herramientasService.update(herramienta.id,herramienta.urlImg,herramienta.nombreHerramienta, herramientaToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteHerramientas(herramienta: Herramientas):void {
this.cargando = true;
this.herramientasService.delete(herramienta.id).subscribe(
data => {
this.herramientas = this.herramientas.filter(e => e !== herramienta);
this.displayDeleteForm = false;
}
);
setTimeout(() => {
  location.reload();
}, 5000);
}


ngOnInit(): void {
this.herramientasService.getAll().subscribe(
data => {
this.herramientas = data;
}
);
}
}
