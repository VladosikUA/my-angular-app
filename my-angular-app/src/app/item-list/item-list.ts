import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DiscountItem } from '../shared/models/discount-item.model';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  searchTerm: string = '';

  items$!: Observable<DiscountItem[]>;

  constructor(private dataService: DataService) {
    this.items$ = this.dataService.items$;
  }

  onSearchChange() {
    this.dataService.filterItems(this.searchTerm);
  }

  onItemSelected(item: DiscountItem) {
    alert("Вибрано: " + item.title);
  }
}