import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AcercaDeService } from '../../servicios/acerca-de.service';
import { AcercaDe } from './acercade';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercade: AcercaDe = new AcercaDe();
  id:number=1;
  acercades: AcercaDe[] = [];
  displayUpdateForm: boolean = false;
  postId: any;
 
   constructor(private acercadeService:AcercaDeService, private router:Router, private activeRoute:ActivatedRoute,public autenticaticionService: AutenticacionService) { 
   }
 
  createAcercaDe():void {
    this.acercadeService.create(this.acercade).subscribe(
      data=> {
        this.acercades.push(data);
        this.acercade = new AcercaDe();
        this.displayUpdateForm = false;
        location.reload();;
      }
    )
  } 


  cargar(acercade: AcercaDe):void{
    var acercaDeToUpdate=acercade;
    this.acercadeService.update(acercade.id,acercade.descripcionPersonal, acercaDeToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
    this.router.navigate(['porfolio']);
}

   ngOnInit(): void {
    this.acercadeService.get(this.id).subscribe(
    data => {
    this.acercade = data;
    }
    );
    this.acercadeService.getAll().subscribe(
    data => {
    this.acercades = data;
    }
    );
    }

    
 }
