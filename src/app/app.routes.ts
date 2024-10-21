import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'quem-somos', component:QuemSomosComponent}
];
