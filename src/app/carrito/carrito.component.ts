import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Item } from '../models/Item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: Item[] = [];
  cartCount: number = 0;
  totalPrice: number = 0;
  mostrarPopup = false;
  mensajePopup: string = "";
  

  constructor(private carritoService: CarritoService, private router: Router) {
    this.cartItems = this.carritoService.getItems();
    this.cartCount = this.carritoService.getCartCount();
    this.totalPrice = this.calculateTotalPrice();
  }
 

  
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.precio, 0); // Sumar el precio de todos los ítems
  }


  clearCart() {
    this.carritoService.clearCart();
    this.cartItems = [];
    this.cartCount = 0; // Resetea el conteo
  }

  finalizarCompra() {
    this.mensajePopup = 'Hemos validado el pago, gracias por tu compra. Serás devuelto a nuestro catálogo.';
    // Mostrar el popup
    this.mostrarPopup = true;

    // Opcional: Cerrar el popup después de unos segundos
    setTimeout(() => {
      this.router.navigate(['/catalogo']);
    }, 5000);

    this.clearCart();
  }


  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }


}
