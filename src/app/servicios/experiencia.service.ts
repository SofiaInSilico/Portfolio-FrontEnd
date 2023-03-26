import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../componentes/experiencia/experiencia';

@Injectable({
    providedIn: 'root'
  })
export class ExperienciaService{


    private url:string="http://localhost:8080/api/experiencia";
    private urlLista:string="http://localhost:8080/api/experiencia/traer";
    private urlCrear:string="http://localhost:8080/api/experiencia/crear";
    private urlEliminar:string="http://localhost:8080/api/experiencia/borrar"
    private urlActualizar:string="http://localhost:8080/api/experiencia/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista de experiencia
  getAll():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlLista);
  }

  // crear experiencia
  create(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.urlCrear, experiencia);
  }

  //Obtener experiencia
  get(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.url}/${id}`);
  }

  //actualizar experiencia
  update(id:number,nombreEmpresa:String,periodo:String,funcion:String,tituloPuesto:string,logoEmpresa:string, experiencia:Experiencia ):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.urlActualizar}/${id}?nombre de la empresa=${nombreEmpresa}&periodo dentro de la empresa=${periodo}&Funcion dentro de la empresa=${funcion}&titulo del puesto=${tituloPuesto}&logo de la empresa=${logoEmpresa}`, experiencia);
  }

  //eliminar experiencia
  delete(id:number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.urlEliminar+'/'+id);
  }
}