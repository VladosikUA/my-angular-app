import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
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
export class ItemList implements OnInit, OnDestroy {

  searchTerm: string = '';
  items: DiscountItem[] = [];

  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.items$.subscribe(data => {
      this.items = data;
    });
  }

  onSearchChange() {
    this.dataService.filterItems(this.searchTerm);
  }

  onItemSelected(item: DiscountItem) {
    alert("Вибрано: " + item.title);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}