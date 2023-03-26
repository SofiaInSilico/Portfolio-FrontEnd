import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form:FormGroup;
  isLogged=false;
constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
  this.autenticacionService.isLogged = !!localStorage.getItem('currentUser');
  this.form=this.formBuilder.group(
    {
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    }
  )
}

ngOnInit(): void {

}

get Username(){
  return this.form.get('username');
}

get Password(){
  return this.form.get('password');
}

onEnviar(event:Event)
{
event.preventDefault;
this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
  console.log("DATA:" + JSON.stringify(data));
  this.ruta.navigate(['/portfolio'])
  this.isLogged=true;
})
}
}
