import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountItem } from '../shared/models/discount-item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {

  searchTerm: string = '';

  items: DiscountItem[] = [
    {
      id: 1,
      title: 'Знижка на смартфон',
      store: 'Comfy',
      oldPrice: 12000,
      newPrice: 8999,
      validUntil: '2025-12-01',
      imageUrl: 'https://th.bing.com/th/id/OIP.sjDmmqF77-usz7TOHHdkywHaFj?w=268&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    },
    {
      id: 2,
      title: 'Акція на ноутбук',
      store: 'Rozetka',
      oldPrice: 25000,
      newPrice: 19999,
      validUntil: '2025-12-10',
      imageUrl: 'https://i.moyo.ua/img/smart_filters/pp_0EXXzP_image_1694680030.jpg'
    },
    {
      id: 3,
      title: 'Знижка на кавоварку',
      store: 'Foxtrot',
      oldPrice: 8000,
      newPrice: 3999,
      validUntil: '2025-11-30',
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/473894722.jpg'
    }
  ];

  filteredItems() {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onItemSelected(item: DiscountItem) {
    console.log("Вибрано елемент:", item);
    alert("Вибрано: " + item.title);
  }
}