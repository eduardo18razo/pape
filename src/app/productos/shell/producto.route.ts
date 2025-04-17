import { Routes } from "@angular/router";

export default[
{
    path:'', loadComponent: () => import('../listado-productos/listado-productos.component'),
}
] as Routes