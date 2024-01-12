import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product | undefined;
  
  //Objeto para capturar la información
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
     ){}
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //Trae todos los paramatros de la url
    const productIdFromRoute =  Number(routeParams.get('productId'));

    this.product = products.find(p => p.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carrito');
  }

  



}
