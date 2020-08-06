import { Component, OnInit } from '@angular/core';
import { BookService } from './book.sevice';
import { Book } from './book.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data:any) => {
      this.books = data;
    });
  }

  deleteBook() {
    this.bookService.deleteBook(100).subscribe(()=> {
        this.getAllBooks();
    });
  }
}
