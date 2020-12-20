import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

/**
 * Component that provides the navbar
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  hasValidToken: boolean = this.authService.hasValidToken;

  ngOnInit(): void {
    this.eventService.tokenHasChanged.subscribe(
      () => (this.hasValidToken = this.authService.hasValidToken)
    );
  }

  /**
   * Logs the user out by set authService.hasValidToken to false.
   * Navigates the user to index.
   * TODO: REST call to delete token
   */
  logout() {
    //TODO: REST call to delete token
    this.authService.hasValidToken = false;
    this.eventService.tokenHasChanged.emit();

    this.router.navigate(['']);
  }
}
