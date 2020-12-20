import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service that provides authentication related functionality and HTTP requests.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // The base URL is required to make HTTP requests to absolute paths.
  private baseUrl = 'http://localhost:3000';

  /**
   * 'true' if the user has a valid token.
   * */
  hasValidToken = false;

  constructor(private http: HttpClient) {}

  /**
   * Makes a REST call to the server to get a JWT token.
   * TODO: At this Moment the server just sends a 200 and no token
   *
   * @param email The user's email.
   * @param password The user's password.
   * @returns An observable with 'null'.
   */
  getToken(email: string, password: string): Observable<null> {
    const authInfo = `Basic ` + window.btoa(email + ':' + password);

    return this.http.get<null>(`${this.baseUrl}/token`, {
      headers: new HttpHeaders().set('Authorization', authInfo),
    });
  }
}
