import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
    providedIn : 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}

    getAllUsers() {
        return this.http.get("http://localhost:8095/library-service/library/users")
            .pipe(map((data: User[]) => {return data;
        }), catchError( error => {
            return throwError( 'Something went wrong!' );
        }));
    }

    deleteUser(id: number) {
        return this.http.delete("http://localhost:8095/library-service/library/users/"+id);
    }
}