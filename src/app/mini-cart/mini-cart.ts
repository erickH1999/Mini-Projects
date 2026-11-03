import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  imports: [],
  templateUrl: './mini-cart.html',
  styleUrl: './mini-cart.css',
})
export class MiniCart {

  // Key used to store the cart data in local storage
  private STORAGE_KEY = 'cart_data';


  // Computed signal to get the total number of items in the cart
  constructor() {
    effect(() => {
      const value = this.cart();

      // Store the cart data in local storage whenever it changes
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
      }

    });
  }

  loadCart(): any[] {
    // Load the cart data from local storage if it exists
    if (typeof localStorage === 'undefined') return [];

    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];

  };

  // Define the list of products available in the mini cart
  products = [
    { id: 1, name: 'Gamecube', price: 150 },
    { id: 2, name: 'Dreamcast', price: 100 },
    { id: 3, name: 'PlayStation 2', price: 200 }
  ]

  // Signal to store the cart data
  cart = signal<any[]>(this.loadCart());

  // Define the list of products in the cart
  addToCart(product: any) {
    this.cart.update(c => [...c, product]);
  }

  // Signal to store the cart data
  removeFromCart(index: number) {
    this.cart.update(c => c.filter((_, i) => i !== index));
  }

  // Computed signal to get the total number of items in the cart
  count = computed(() => this.cart().length);

  // Computed signal to get the total price of items in the cart
  total = computed(() => this.cart().reduce((sum, item) => sum + item.price, 0));
}
