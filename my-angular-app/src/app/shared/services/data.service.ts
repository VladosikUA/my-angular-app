import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DiscountItem } from '../models/discount-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsSubject = new BehaviorSubject<DiscountItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getItems(): Observable<DiscountItem[]> {
    return this.http.get<DiscountItem[]>('/items').pipe(
      tap(items => this.itemsSubject.next(items)),
      catchError(this.handleError)
    );
  }

  getItemById(id: number): Observable<DiscountItem> {
    return this.http.get<DiscountItem>(`/items/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addItem(item: Omit<DiscountItem, 'id'>): Observable<DiscountItem> {
    return this.http.post<DiscountItem>('/items', item).pipe(
      tap(() => this.getItems().subscribe()),
      catchError(this.handleError)
    );
  }

  filterItems(term: string): void {
    if (!term.trim()) {
      this.getItems().subscribe();
      return;
    }

    this.http.get<DiscountItem[]>(`/items?q=${encodeURIComponent(term)}`).pipe(
      catchError(this.handleError)
    ).subscribe(items => {
      this.itemsSubject.next(items);
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Сталася помилка при роботі з даними';

    if (error.status === 0) {
      errorMessage = 'Відсутнє з’єднання з сервером. Перевірте, чи запущено json-server.';
    } else if (error.status === 404) {
      errorMessage = 'Запитувані дані не знайдено на сервері (Помилка 404).';
    } else {
      errorMessage = `Сервер повернув помилку з кодом ${error.status}: ${error.message}`;
    }

    window.alert(errorMessage);

    console.error('Деталі помилки:', error);

    return throwError(() => new Error(errorMessage));
  }
}