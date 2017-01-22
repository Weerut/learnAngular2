import { Component, OnInit, OnChanges } from '@angular/core';
// import { IBook } from '../book';

@Component({
    moduleId: module.id,
    selector: 'bs-books-list',
    templateUrl: 'books-list.component.html'
})

export class BooksListComponent {

    animals: string[] = ['zebra', 'moose'];
    imageWidth: number = 100;
    showImage: boolean = true;
    booksInStock: number = 2;
    favouriteMessage: string = "test";

    books: any[] = [{
        bookAuthor: "Tom Jones",
        bookTitle: "Hi yo",
        bookPrice: 99.95,
        bookDescription: "Book of historical fiction",
        publishedOn: new Date('02/12/1984'),
        inStock: "yes",
        bookReviews: 20,
        bookImageUrl: "app/assets/images/656.jpg"
    },{
        bookAuthor: "Mike Jones",
        bookTitle: "War and Peace 2AAA",
        bookPrice: 10.95,
        bookDescription: "Book of historical fiction",
        publishedOn: new Date('02/12/1984'),
        inStock: "yes",
        bookReviews: 18,
        bookImageUrl: "app/assets/images/656.jpg"
    }];


    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    onFavouriteClicked(message: string): void {
        this.favouriteMessage = message;
    }
}