import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { DiscountItem } from '../shared/models/discount-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemFormComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    store: new FormControl('', Validators.required),
    oldPrice: new FormControl('', [Validators.required, Validators.min(1)]),
    newPrice: new FormControl('', [Validators.required, Validators.min(1)]),
    validUntil: new FormControl('', Validators.required),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\//)])
  });

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newItem: DiscountItem = {
      id: Date.now(),
      title: this.form.value.title!,
      store: this.form.value.store!,
      oldPrice: Number(this.form.value.oldPrice),
      newPrice: Number(this.form.value.newPrice),
      validUntil: this.form.value.validUntil!,
      imageUrl: this.form.value.imageUrl!
    };

    this.dataService.addItem(newItem);
    this.router.navigate(['/items']);
  }
}