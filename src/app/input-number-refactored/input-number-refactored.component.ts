import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../clothes-list/Producto';

@Component({
  selector: 'app-input-number-refactored',
  templateUrl: './input-number-refactored.component.html',
  styleUrl: './input-number-refactored.component.scss',
})
export class InputNumberRefactoredComponent implements OnInit {
  constructor() {}
  @Input()
  producto: Producto;
  ngOnInit(): void {}
  addcantidad(producto: Producto): void {
    if (producto.stock > producto.cantidad) {
      producto.cantidad++;
    }
  }
  discantidad(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }
}
