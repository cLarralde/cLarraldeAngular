import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from './clothes-list/Producto';

const URL = 'https://6691856d26c2a69f6e900153.mockapi.io/api/v1/productos';
@Injectable({
  providedIn: 'root',
})
export class ClothesDataService {
  constructor(private http: HttpClient) {}
  public getAll(): Observable<Producto[]> {
    return this.http
      .get<Producto[]>(URL)
      .pipe(
        tap((productos: Producto[]) =>
          productos.forEach((producto) => (producto.cantidad = 0))
        )
      );
  }
}
