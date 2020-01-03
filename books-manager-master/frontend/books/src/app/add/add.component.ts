import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Book } from '../Book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private apiurl="http://127.0.0.1:8000/api/data";
  constructor(private http:HttpClient) { }
  private book:Book;
  ngOnInit() {
  }

  createBook(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Book>(this.apiurl, this.book, httpOptions);
  }
}
