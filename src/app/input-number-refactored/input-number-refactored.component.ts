import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../clothes-list/Producto';
import { max } from 'rxjs';

@Component({
  selector: 'app-input-number-refactored',
  templateUrl: './input-number-refactored.component.html',
  styleUrl: './input-number-refactored.component.scss',
})
export class InputNumberRefactoredComponent implements OnInit {
  constructor() {}
  @Input() quantity: number;
  ngOnInit(): void {}
  @Input() max: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  addcantidad(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  discantidad(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
