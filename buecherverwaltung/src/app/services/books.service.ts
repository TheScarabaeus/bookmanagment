import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service that provides books related functionality and HTTP requests
 */
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // The base URL is required to make HTTP requests to absolute paths.
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /**
   * Get all books.
   *
   * @returns An observable with the request's data.
   */
  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/books`);
  }

  /**
   * Posts a new book.
   *
   * @param book The new book.
   * @returns An observable with the request's data.
   */
  postBook(book: Book): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/books`, book);
  }

  /**
   * Updates a book by id.
   *
   * @param id The id of the book.
   * @param book The book with the new data.
   * @returns An observable with the request's data.
   */
  putBook(id: string, book: Book): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/books/${id}`, book);
  }

  /**
   * Deletes a book by id.
   *
   * @param id The id of the book.
   * @returns An observable with the request's data.
   */
  deleteBook(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/books/${id}`);
  }
}
