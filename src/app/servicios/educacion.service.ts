import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/educacion/educacion';

@Injectable({
    providedIn: 'root'
  })
export class EducacionService{


    private url:string="http://localhost:8080/api/educacion";
    private urlLista:string="http://localhost:8080/api/educacion/traer";
    private urlCrear:string="http://localhost:8080/api/educacion/crear";
    private urlEliminar:string="http://localhost:8080/api/educacion/borrar"
    private urlActualizar:string="http://localhost:8080/api/educacion/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista Educacion
  getAll():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlLista);
  }

  // crear Educacion
  create(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.urlCrear, educacion);
  }

  //Obtener Educacion
  get(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.url}/${id}`);
  }

  //actualizar Educacion
  update(id:number,Instituto:String,Fecha:String,Titulo:String,logo:string,urlCertificado:string, educacion:Educacion ):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.urlActualizar}/${id}?Instituto=${Instituto}&Fecha=${Fecha}&Titulo=${Titulo}&logo=${logo}&Certificado=${urlCertificado}`, educacion);
  }

  //eliminar Educacion
  delete(id:number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.urlEliminar+'/'+id);
  }
}