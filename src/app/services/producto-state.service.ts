import { inject, Injectable } from "@angular/core";
import { Producto } from "../interfaces/producto.interface";
import { signalSlice } from 'ngxtension/signal-slice';
import { ServicioProductos } from "./productos.services";
import { map } from "rxjs";

interface State{
    productos: Producto[];
    status: 'loading' | 'success' | 'error';
}

@Injectable ()
export class ProductoStateService {
  private servicioPr0ductos = inject(ServicioProductos)

    private initialState: State = {
        productos: [],
        status: 'loading' as const
    };

    state = signalSlice({
      initialState: this.initialState,
      sources: [
        this.servicioPr0ductos
        .getAll()
        .pipe(map(prod=>({ productos: prod, status: 'success' as const })))
      ]

    });

}
