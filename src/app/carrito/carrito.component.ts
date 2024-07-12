import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { Producto } from '../clothes-list/Producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
listaCarrito$: Observable<Producto[]>;
  constructor( private cart: ClothesCartService){
    this.listaCarrito$ = cart.carrito.asObservable();
}
  ngOnInit(): void {
  }

}
