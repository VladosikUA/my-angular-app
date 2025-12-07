import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { DiscountItem } from '../shared/models/discount-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css'],
})
export class ItemDetailsComponent implements OnInit {

  item!: DiscountItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getItems().subscribe(items => {
      this.item = items.find(i => i.id === id);
    });
  }

  goBack() {
    this.location.back();
  }
}