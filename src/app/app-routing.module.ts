import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/iniciar-sesion/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';


const routes: Routes = [
  {path:'portfolio',component:PorfolioComponent },
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
