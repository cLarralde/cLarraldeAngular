import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss',
})
export class ClothesListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private cart: ClothesCartService,
    private clothesDataService: ClothesDataService
  ) {}

  ngOnInit(): void {
    this.clothesDataService
      .getAll()
      .subscribe((listaRopa) => (this.productos = listaRopa));
  }

  addCart(producto: Producto): void {
    this.cart.addToCart(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }
}
