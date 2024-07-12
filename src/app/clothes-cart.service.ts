import { Injectable } from '@angular/core';
import { Producto } from './clothes-list/Producto';

@Injectable({
  providedIn: 'root',
})
export class ClothesCartService {
  carrito: Producto[] = [];
  constructor() {}
  //Maneja logica del carrito.
  addToCart(producto: Producto) {
    let item = this.carrito.find((v1)=> v1.nombre == producto.nombre) /*Si pongo el tipo se rompe */
    if(!item){
      this.carrito.push({... producto});
    } else{
      item.cantidad += producto.cantidad;
    }
    console.log(this.carrito);
  }
}
