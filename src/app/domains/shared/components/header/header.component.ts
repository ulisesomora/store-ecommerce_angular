import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }

}
