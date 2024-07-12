import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
constructor( private cart: ClothesCartService){
}
  ngOnInit(): void {
  }
}
