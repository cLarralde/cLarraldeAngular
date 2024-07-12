import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';
import { ClothesCartService } from '../clothes-cart.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss',
})
export class ClothesListComponent implements OnInit {
  productos: Producto[] = [
    {
      imagen: 'img/pantalonShinjuku.jpg',
      nombre: 'Pantalon cargo shinjuku',
      temporada: 2022,
      precio: 25000,
      stock: 28,
      oferta: false,
      cantidad: 0,
    },
    {
      imagen: 'img/cargoFuturo.jpg',
      nombre: 'Pantalon cargo No Future',
      temporada: 2024,
      precio: 48000,
      stock: 5,
      oferta: true,
      cantidad: 0,
    },
    {
      imagen: 'img/buzoBudo.jpg',
      nombre: 'Sweather Budo',
      temporada: 2021,
      precio: 17000,
      stock: 17,
      oferta: true,
      cantidad: 0,
    },

    {
      imagen: 'img/remeraAntiSocial.jpg',
      nombre: 'Remera AntiSocial Club',
      temporada: 2024,
      precio: 78000,
      stock: 80,
      oferta: false,
      cantidad: 0,
    },
  ];

  constructor(private cart: ClothesCartService) {}

  ngOnInit(): void {}

  addCart(producto: Producto): void {
    this.cart.addToCart(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }
}
