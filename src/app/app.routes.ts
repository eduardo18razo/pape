import { Routes } from '@angular/router';

export const routes: Routes = [
    {        path:'productos', loadComponent: () => import('./productos/listado-productos/listado-productos.component')    },
    {  path:'**', redirectTo: 'productos'}

];
