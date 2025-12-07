import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscountItem } from '../shared/models/discount-item.model';
import { HoverHighlightDirective } from '../shared/directives/hover-highlight.directive';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HoverHighlightDirective,
    TruncatePipe
  ],
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