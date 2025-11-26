import { Component } from '@angular/core';
import { ItemList } from '../item-list/item-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}