import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Book} from './Book'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiurl="http://127.0.0.1:8000/api/data";
  constructor(private http:HttpClient) { }
  
  booksData(){
    return this.http.get<Book[]>(this.apiurl);
  }

}
