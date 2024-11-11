import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ClientesComponent } from './componentes/cliente/clientes/clientes.component';
<<<<<<< HEAD
=======
import { ClientesDadosComponent } from './componentes/cliente/clientes-dados/clientes-dados.component';
>>>>>>> 2974512 (updated v)

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'quem-somos', component:QuemSomosComponent},
<<<<<<< HEAD
    {path: 'clientes', component:ClientesComponent}
=======
    {path: 'clientes' , component:ClientesComponent},
    {path: 'clientes/:id' , component:ClientesDadosComponent }

>>>>>>> 2974512 (updated v)
];
