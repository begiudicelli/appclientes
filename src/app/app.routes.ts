import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ClientesComponent } from './componentes/cliente/clientes/clientes.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'quem-somos', component:QuemSomosComponent},
    {path: 'clientes', component:ClientesComponent}
];
