import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive'
import { TruncatePipe } from './shared/pipes/truncate.pipe'
import { FavouriteComponent } from './favourites/favourite.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { BookService } from './books/book.service'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: 'books', component: BooksListComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ])],
  providers: [BookService],
  declarations: [AppComponent,
    BooksListComponent, HighlightDirective, TruncatePipe, FavouriteComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }