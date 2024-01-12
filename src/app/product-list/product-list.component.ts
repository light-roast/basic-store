import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(nombre: string) {
    window.alert('El producto '+ nombre+' se ha compartido');
  }
  onNotify(){
    window.alert('Se le notificará cuando el producto salga a la venta');
  }


}