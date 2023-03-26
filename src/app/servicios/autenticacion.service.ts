import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {
    url="http://localhost:8080/login";
    currentUserSubject: BehaviorSubject<any>;
    public isLogged = false;
    constructor(private http:HttpClient) { 
        console.log("El servicio de autenticacion esta corriendo");
        this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
        this.currentUserSubject.subscribe(currentUser => {
            console.log(currentUser);
          });
    }

    iniciarSesion(credenciales:any):Observable<any>
    {
        return this.http.post(this.url, credenciales).pipe(map(data=>{
        localStorage.setItem('currentUser', JSON.stringify(data));
        console.log(data);
        this.isLogged = true;
        this.currentUserSubject.next(data);
            console.log(data);
            return data;
        }))
    }

   get UsuarioAutenticado()    
   {
    return this.currentUserSubject.value;
   }

   

   isLoggedIn() {
    return this.isLogged;
  }

  cerrarSesion() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.isLogged = false;
  }
  
}