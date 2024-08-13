import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService)

  constructor(){
    const initProducts: Product[] =[
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      }, 
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=76',
        creationAt: new Date().toISOString()
      }, 
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=4503',
        creationAt: new Date().toISOString()
      }, 
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=323',
        creationAt: new Date().toISOString()
      }, 
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=435',
        creationAt: new Date().toISOString()
      }, 
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=676',
        creationAt: new Date().toISOString()
      }, 
    ];
    this.products.set(initProducts);
  }
  addToCart( product: Product){
    this.cartService.addToCart(product)
  }
}
