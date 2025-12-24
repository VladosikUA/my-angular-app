import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DiscountItem } from '../shared/models/discount-item.model';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
})
export class ItemList implements OnInit {

  searchTerm: string = '';
  items$!: Observable<DiscountItem[]>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.dataService.items$;
    this.dataService.getItems().subscribe();
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.searchTerm);
  }

  onItemSelected(item: DiscountItem): void {
    alert('Вибрано: ' + item.title);
  }

  goToAddItem(): void {
    this.router.navigate(['/add-item']);
  }
}