import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../componentes/cursosCertificaciones/cursosCertificaciones';

@Injectable({
    providedIn: 'root'
  })
export class CursoService{


    private url:string="http://localhost:8080/api/CursosCertificaciones";
    private urlLista:string="http://localhost:8080/api/CursosCertificaciones/traer";
    private urlCrear:string="http://localhost:8080/api/CursosCertificaciones/crear";
    private urlEliminar:string="http://localhost:8080/api/CursosCertificaciones/borrar"
    private urlActualizar:string="http://localhost:8080/api/CursosCertificaciones/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista Cursos
  getAll():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlLista);
  }

  // crear Curso
  create(curso:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.urlCrear, curso);
  }

  //Obtener Curso
  get(id:number):Observable<Curso>{
    return this.http.get<Curso>(`${this.url}/${id}`);
  }

  //actualizar Curso
  update(id:number, urlImg:string, Titulo:String, Fecha:String, urlCertificado:string, curso:Curso ):Observable<Curso>{
    return this.http.put<Curso>(`${this.urlActualizar}/${id}?urlImg=${urlImg}&Titulo=${Titulo}&Fecha=${Fecha}&Certificado=${urlCertificado}`, curso);
  }

  //eliminar Curso
  delete(id:number):Observable<Curso>{
    return this.http.delete<Curso>(this.urlEliminar+'/'+id);
  }
}