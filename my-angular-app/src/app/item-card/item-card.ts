import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountItem } from '../shared/models/discount-item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() item!: DiscountItem;
}