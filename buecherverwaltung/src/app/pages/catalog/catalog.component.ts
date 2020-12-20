import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books.service';

/**
 * Page that provides the list of all books
 */
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  books: Book[] = [];

  ngOnInit(): void {
    // gets the books on initialization
    this.getBooks();
  }

  /**
   * Subscribes to the observable getBooks() to get all books from the Server
   */
  getBooks() {
    this.booksService.getBooks().subscribe(
      (data) => (this.books = data),
      (error) => console.log(error)
    );
  }

  /**
   * Subscribes to the observable deleteBook(id: string) to delete one book by id
   *
   * @param id The id of the book to be deleted
   */
  deleteBook(id: string) {
    this.booksService.deleteBook(id).subscribe(
      (data) => (this.books = data),
      (error) => console.log(error)
    );
  }

  /**
   * Subscribes to the observable putBook(id: string, book: Book) to update one book by id.
   * Sets borrowed of the book to true.
   * Sets borrowedDate of the book to the todays date.
   *
   * @param id The id of the book to be deleted
   */
  borrowBook(id: string) {
    // ISO-8601 Date format "yyyy-mm-dd"
    let todayDate = new Date().toISOString().substring(0, 10);
    // searches the index of the book by id
    let index = this.books.map((book) => book.id).indexOf(id);
    this.books[index].borrowed = true;
    this.books[index].borrowedDate = todayDate.toString();
    this.booksService.putBook(id, this.books[index]).subscribe(
      (data) => (this.books = data),
      (error) => console.log(error)
    );
  }

  /**
   * Subscribes to the observable putBook(id: string, book: Book) to update one book by id.
   * Sets borrowed of the book to false.
   *
   * @param id The id of the book to be deleted
   */
  returnBook(id: string) {
    // searches the index of the book by id
    let index = this.books.map((book) => book.id).indexOf(id);
    this.books[index].borrowed = false;
    this.booksService.putBook(id, this.books[index]).subscribe(
      (data) => (this.books = data),
      (error) => console.log(error)
    );
  }
}
