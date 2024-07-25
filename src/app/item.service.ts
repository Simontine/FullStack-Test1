import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rate: number;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
