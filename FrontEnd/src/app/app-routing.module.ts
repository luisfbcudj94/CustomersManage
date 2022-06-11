import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesDetalleComponent } from './components/clientes/clientes-detalle/clientes-detalle.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'main', component:MainComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/detalle/:id',component:ClientesDetalleComponent},
  {path:'**', component: LoginComponent, pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
