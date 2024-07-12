import { Injectable } from '@angular/core';
import { Producto } from './clothes-list/Producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClothesCartService {
  private _carrito:Producto[]= [];
  carrito: BehaviorSubject <Producto[]> = new BehaviorSubject(this._carrito);
  /*clase 7 1h */
  constructor() {}
  addToCart(producto: Producto) {
    let item = this._carrito.find((v1)=> v1.nombre == producto.nombre) /*Si pongo el tipo se rompe */
    if(!item){
      this._carrito.push({... producto});
    } else{
      item.cantidad += producto.cantidad;
    }
    console.log(this._carrito);
    this.carrito.next(this._carrito);
  }
}
