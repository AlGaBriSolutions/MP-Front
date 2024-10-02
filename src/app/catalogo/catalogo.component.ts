import { Component} from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  products: Item[] = [];
  categorias = ['Alojamiento', 'Alimentación', 'Transporte', 'Paseos Ecológicos', 'Extremo', 'Senderismo'];
  filtro: string = '';
  mostrarPopup = false;
  mensajePopup: string = "";
  categoriaSeleccionada: string = '';
  categoriasSeleccionadas: string[] = [];
  cartCount: number = 0;
  Items = [
    {
      image: '../../../assets/images/img1.jpg',
      titulo: 'Senderismo Parque Ecológico X',
      contenido: 'Disfruta de esta increíble aventura',
      precio: 176558,
      clasificacion: 'Senderismo'
    },
    {
      image: '../../../assets/images/img2.jpg',
      titulo: 'Avistamiento de Aves',
      contenido: 'Dejate deslumbrar de la diversidad de aves',
      precio: 168589,
      clasificacion: 'Paseo Ecológico'
    },
    {
      image: '../../../assets/images/sanCipriano.jpg',
      titulo: 'Alojamiento San Cipriano',
      contenido: 'Increible alojamiento para tus actividades',
      precio: 162155,
      clasificacion: 'Alojamiento'
    },
    {
      image: '../../../assets/images/img1.jpg',
      titulo: 'Senderismo Parque Ecológico X',
      contenido: 'Disfruta de esta increíble aventura',
      precio: 176558,
      clasificacion: 'Senderismo'
    },
    {
      image: '../../../assets/images/img2.jpg',
      titulo: 'Avistamiento de Aves',
      contenido: 'Dejate deslumbrar de la diversidad de aves',
      precio: 168589,
      clasificacion: 'Paseo Ecológico'
    },
    {
      image: '../../../assets/images/sanCipriano.jpg',
      titulo: 'Alojamiento San Cipriano',
      contenido: 'Increible alojamiento para tus actividades',
      precio: 162155,
      clasificacion: 'Alojamiento'
    },
    {
      image: '../../../assets/images/img1.jpg',
      titulo: 'Senderismo Parque Ecológico X',
      contenido: 'Disfruta de esta increíble aventura',
      precio: 176558,
      clasificacion: 'Senderismo'
    },
    {
      image: '../../../assets/images/img2.jpg',
      titulo: 'Avistamiento de Aves',
      contenido: 'Dejate deslumbrar de la diversidad de aves',
      precio: 168589,
      clasificacion: 'Paseo Ecológico'
    },
    {
      image: '../../../assets/images/sanCipriano.jpg',
      titulo: 'Alojamiento San Cipriano',
      contenido: 'Increible alojamiento para tus actividades',
      precio: 162155,
      clasificacion: 'Alojamiento'
    },
    {
      image: '../../../assets/images/img1.jpg',
      titulo: 'Senderismo Parque Ecológico X',
      contenido: 'Disfruta de esta increíble aventura',
      precio: 176558,
      clasificacion: 'Senderismo'
    },
    {
      image: '../../../assets/images/img2.jpg',
      titulo: 'Avistamiento de Aves',
      contenido: 'Dejate deslumbrar de la diversidad de aves',
      precio: 168589,
      clasificacion: 'Paseo Ecológico'
    },
    {
      image: '../../../assets/images/sanCipriano.jpg',
      titulo: 'Alojamiento San Cipriano',
      contenido: 'Increible alojamiento para tus actividades',
      precio: 162155,
      clasificacion: 'Alojamiento'
    },
  ];

  constructor(private carritoService: CarritoService) {
    this.updateCartCount(); // Inicializa el conteo
  }
  addToCart(product: Item) {
    this.carritoService.addToCart(product);
    this.updateCartCount(); 
    this.mensajePopup = 'Producto agregado al carrito con éxito';
    // Mostrar el popup
    this.mostrarPopup = true;

    // Opcional: Cerrar el popup automáticamente después de unos segundos
    setTimeout(() => {
      this.cerrarPopup();
    }, 5000); //
  }

  private updateCartCount() {
    this.cartCount = this.carritoService.getCartCount();
  }

  sortItems(event: any) {
    const value = event.target.value;
    if (value === 'priceAsc') {
      this.Items.sort((a, b) => a.precio - b.precio);
    } else if (value === 'priceDesc') {
      this.Items.sort((a, b) => b.precio - a.precio);
    }
  }

  aplicarFiltro() {
    return this.Items.filter((product) => {
      const coincideFiltro =
        product.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        product.contenido.toLowerCase().includes(this.filtro.toLowerCase()) ||
        product.precio.toString().toLowerCase().includes(this.filtro.toLowerCase());

      const coincideCategoria =
        this.categoriasSeleccionadas.length === 0 || 
        this.categoriasSeleccionadas.includes(product.clasificacion);

      return coincideFiltro && coincideCategoria;
    });
  }

  // Función para actualizar las categorías seleccionadas
  actualizarCategoriasSeleccionadas(categoria: string, event: Event) {
    const target = event.target as HTMLInputElement; // Aserción de tipo aquí
    const seleccionado = target.checked;
  
    if (seleccionado) {
      this.categoriasSeleccionadas.push(categoria);
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(c => c !== categoria);
    }
  }
  

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }


}
