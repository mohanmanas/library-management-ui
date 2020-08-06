import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';
import { BookListComponent } from './book-list/book-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const APP_ROUTES = [
  { path:'books', component: BookListComponent },
  { path:'users', component: UsersListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibraryHeaderComponent,
    BookListComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
