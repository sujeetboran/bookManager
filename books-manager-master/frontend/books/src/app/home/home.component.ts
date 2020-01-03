import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books:Book[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.booksData().subscribe(books=>this.books=books);
  }

}
