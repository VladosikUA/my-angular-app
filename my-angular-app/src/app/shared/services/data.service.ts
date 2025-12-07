import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DiscountItem } from '../models/discount-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items: DiscountItem[] = [
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

  private itemsSubject = new BehaviorSubject<DiscountItem[]>(this.items);
  items$ = this.itemsSubject.asObservable();

  constructor() {}

  getItems(): Observable<DiscountItem[]> {
    return of(this.items);
  }

  filterItems(search: string) {
    const filtered = this.items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    this.itemsSubject.next(filtered);
  }
addItem(item: DiscountItem) {
  this.items.push(item);
  this.itemsSubject.next([...this.items]);
}
}