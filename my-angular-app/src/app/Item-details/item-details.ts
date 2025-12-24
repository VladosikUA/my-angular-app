import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Додано ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { DiscountItem } from '../shared/models/discount-item.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: DiscountItem | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.isLoading = false;
      this.cdr.markForCheck();
      return;
    }

    this.dataService.getItemById(id).subscribe({
      next: (item) => {
        this.item = item;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Помилка завантаження:', err);
        this.item = null;
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/items']);
  }
}