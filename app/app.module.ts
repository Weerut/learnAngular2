import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive'
import { TruncatePipe } from './shared/pipes/truncate.pipe'
import { FavouriteComponent } from './favourites/favourite.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,
    BooksListComponent, HighlightDirective, TruncatePipe, FavouriteComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }