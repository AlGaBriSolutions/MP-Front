import { Component} from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  categorias = ['Alojamiento', 'Alimentación', 'Transporte', 'Paseos Ecológicos', 'Extremo', 'Senderismo'];
  regions = ['Buenaventura', 'Santa Marta', 'Cali', 'Nuquí', 'Cocuy'];
  filtro: string = '';
  products = [
    {
      image: '../../../assets/images/img1.jpg',
      title: 'Senderismo Parque Ecológico X',
      description: 'Disfruta de esta increíble aventura',
      regularPrice: 176558,
      seller: 'EMPRESA1'
    },
    {
      image: '../../../assets/images/img2.jpg',
      title: 'Avistamiento de Aves',
      description: 'Dejate deslumbrar de la diversidad de aves',
      regularPrice: 168589,
      seller: 'EMPRESA3'
    },
    {
      image: '../../../assets/images/img6.jpg',
      title: 'Alojamiento San Cipriano',
      description: 'Increible alojamiento para tus actividades',
      regularPrice: 162155,
      seller: 'EMPRESA2'
    }
  ];

  addToCart(product: any) {
    console.log('Producto añadido al carrito:', product);
    // Implementar la lógica para añadir al carrito
  }

  sortProducts(event: any) {
    const value = event.target.value;
    if (value === 'priceAsc') {
      this.products.sort((a, b) => a.regularPrice - b.regularPrice);
    } else if (value === 'priceDesc') {
      this.products.sort((a, b) => b.regularPrice - a.regularPrice);
    }
  }

  aplicarFiltro() {
    return this.products.filter(
      (product) =>
        product.title.toLowerCase().includes(this.filtro.toLowerCase()) ||
        product.description.toLowerCase().includes(this.filtro.toLowerCase()) ||
        product.regularPrice
          .toString()
          .toLowerCase()
          .includes(this.filtro.toLowerCase()) ||
        product.seller.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

}
