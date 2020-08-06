import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book } from './book.model';

@Injectable({
    providedIn : 'root'
})
export class BookService {

    constructor(private http: HttpClient) {}

    getAllBooks() {
        return this.http.get("http://localhost:8095/library-service/library/books")
            .pipe(map((data: Book[]) => {return data;
        }), catchError( error => {
            return throwError( 'Something went wrong!' );
        }));
    }

    deleteBook(id: number) {
        return this.http.delete("http://localhost:8095/library-service/library/books/"+id);
    }
}