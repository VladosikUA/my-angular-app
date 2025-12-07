import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscountItem } from '../shared/models/discount-item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css'],
})
export class ItemCard {
  @Input() item!: DiscountItem;

  @Output() itemSelected = new EventEmitter<DiscountItem>();

  onSelectItem() {
    this.itemSelected.emit(this.item);
  }
}