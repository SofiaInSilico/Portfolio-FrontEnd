import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../componentes/acerca-de/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private url:string="http://localhost:8080/api/acercade";
  private urlLista:string="http://localhost:8080/api/acercade/traer"
  private urlActualizar:string="http://localhost:8080/api/acercade/editar"  
  constructor (private http:HttpClient) { }

  //obtener la lista Acerca De
  getAll():Observable<AcercaDe[]>{
    return this.http.get<AcercaDe[]>(this.urlLista);
  }

  // crear Acerca De
  create(acercade:AcercaDe):Observable<AcercaDe>{
    return this.http.post<AcercaDe>(this.url, acercade);
  }

  //Obtener Acerca De
  get(id:number):Observable<AcercaDe>{
    return this.http.get<AcercaDe>(`${this.url}/${id}`);
  }

  //actualizar Acerca De
  update(id:number,descripcionPersonal:string, acercade:AcercaDe):Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.urlActualizar}/${id}?descripcion personal=${descripcionPersonal}`, acercade);
  }

  //eliminar Acerca De
  delete(id:number):Observable<AcercaDe>{
    return this.http.delete<AcercaDe>(this.url+'/'+id);
  }

}
