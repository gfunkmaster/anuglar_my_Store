import { Component, OnInit } from '@angular/core';
import { Product, products } from './../../products';

import { ActivatedRoute } from '@angular/router';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {

    //First get th product id from the currnt route. 
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    //find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('added to cart')
  }

}
