import { Component, inject } from '@angular/core';
import { ProductoStateService } from '../../services/producto-state.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
  providers: [ProductoStateService]
})
export default class ListadoProductosComponent {
  productoEstado = inject(ProductoStateService);

}
