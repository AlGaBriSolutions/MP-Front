import { Injectable } from '@angular/core';
import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items: Item[] = [];

  addToCart(product: Item) {
    this.items.push(product);
  }

  getItems(): Item[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.precio, 0);
  }

  getCartCount(): number {
    return this.items.length; // Devuelve el número de productos en el carrito
  }
}
