/*import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacionService } from "./servicios/autenticacion.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private autenticacionService:AutenticacionService, private rutas:Router)
    {}

    canActivate(
        route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
           let currentUser=this.autenticacionService.UsuarioAutenticado;
           if (currentUser && currentUser.accessToken){
            return true;
           }
           else {
            this.rutas.navigate(['/iniciar-sesion']);
            return false;
           }
    }
}*/
