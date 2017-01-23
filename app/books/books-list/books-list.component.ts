import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service'

@Component({
    moduleId: module.id,
    selector: 'bs-books-list',
    templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit {

    books: IBook[];
    animals: string[] = ['zebra', 'moose'];
    imageWidth: number = 100;
    showImage: boolean = true;
    booksInStock: number = 2;
    favouriteMessage: string = "test";
    errorMessage:any ="";

    constructor(private _bookService: BookService) { }

    ngOnInit() { this.getBooks() }

    getBooks() {
        this._bookService.getBooks()
            .subscribe(
            books => this.books = books,
            error =>this.errorMessage = <any>error
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    onFavouriteClicked(message: string): void {
        this.favouriteMessage = message;
    }


}