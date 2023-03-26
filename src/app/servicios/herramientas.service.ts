import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Herramientas } from '../componentes/herramientas/herramientas';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  private url:string="http://localhost:8080/api/herramientas";
  private urlLista:string="http://localhost:8080/api/herramientas/traer"
  private urlActualizar:string="http://localhost:8080/api/herramientas/editar"  
  private urlEliminar:string="http://localhost:8080/api/herramientas/borrar"
  private urlCrear:string="http://localhost:8080/api/herramientas/crear"
  constructor (private http:HttpClient) { }

  //obtener la lista Herramientas
  getAll():Observable<Herramientas[]>{
    return this.http.get<Herramientas[]>(this.urlLista);
  }

  // crear Herramientas
  create(herramientas:Herramientas):Observable<Herramientas>{
    return this.http.post<Herramientas>(this.urlCrear, herramientas);
  }

  //Obtener Herramientas
  get(id:number):Observable<Herramientas>{
    return this.http.get<Herramientas>(`${this.url}/${id}`);
  }

  //actualizar Herramientas
  update(id:number,urlImg:string,nombreHerramienta:string, herramientas:Herramientas):Observable<Herramientas>{
    return this.http.put<Herramientas>(`${this.urlActualizar}/${id}?urlImg=${urlImg}&nombreHerramienta=${nombreHerramienta}`, herramientas);
  }

  //eliminar Herramientas
  delete(id:number):Observable<Herramientas>{
    return this.http.delete<Herramientas>(this.urlEliminar+'/'+id);
  }
}
