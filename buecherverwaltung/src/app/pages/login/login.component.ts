import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

interface FormData {
  email: string;
  password: string;
}

/**
 * Page that provides the login form
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData: FormData = {
    email: '',
    password: '',
  };

  isSubmitting = false;

  constructor(
    private router: Router,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  /**
   * Subscribes to the observable getToken(email: string, password: string) authorize and get a jwt token
   * Handles the form submit.
   */
  handleSubmit(): void {
    this.isSubmitting = true;

    const { email, password } = this.formData;

    this.authService.getToken(email, password).subscribe(
      () => {
        this.authService.hasValidToken = true;
        this.eventService.tokenHasChanged.emit();
        this.router.navigate(['catalog']);
      },
      (error) => console.log(error)
    );
  }
}
