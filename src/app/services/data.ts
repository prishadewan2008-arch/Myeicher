// data.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 1. Define your data structure
export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 2. Inject HttpClient using the modern inject() function
  private http = inject(HttpClient); 
  private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  // 3. Create a method that returns an Observable
  getPosts(): Observable<Post[]> {
    console.log(this.http.get<Post[]>(this.apiUrl), "API response");
    return this.http.get<Post[]>(this.apiUrl);
  }
}
