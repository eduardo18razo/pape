import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http-services";
import { Producto } from "../interfaces/producto.interface";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ServicioProductos extends BaseHttpService{
    getAll(): Observable<Producto[]> {
        return this.http.get<any[]>(`${this.apiUrl}/products`)
    }
}
