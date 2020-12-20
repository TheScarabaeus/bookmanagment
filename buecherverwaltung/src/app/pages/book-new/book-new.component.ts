import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../services/books.service';

/**
 * Page that provides the form to upload a new book
 */
@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  constructor(private router: Router, private booksService: BooksService) {}

  // the new Book which will be send to the server
  newBook: Book = {
    id: '',
    title: '',
    author: '',
    publisher: '',
    publishYear: null,
    borrowed: false,
    borrowedDate: '',
  };

  ngOnInit(): void {}

  /**
   * Subscribes to the observable postBook(book: Book) to upload the new Book
   */
  postBook() {
    this.booksService.postBook(this.newBook).subscribe(
      (data) => this.navigateTo('/catalog'),
      (error) => console.log(error)
    );
  }

  /**
   * Navigates to the specified path.
   *
   * @param path The path to navigate to.
   */
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
