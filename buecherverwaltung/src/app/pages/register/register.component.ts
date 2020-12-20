import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface FormData {
  email: string;
  password: string;
}

/**
 * Page that provides the register form
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData: FormData = {
    email: '',
    password: '',
  };

  confirmPassword: string = '';
  isSubmitting = false;
  equalPasswords: boolean = true;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  /**
   * Handles the form Submit.
   * Checks if the passwords are equal and navigates to login.
   * TODO: REST call to create a user
   */
  handleSubmit(): void {
    this.isSubmitting = true;

    if (this.formData.password === this.confirmPassword) {
      this.equalPasswords = true;

      //TODO: REST call to create a user

      this.route.navigate(['login']);
    } else {
      this.equalPasswords = false;
    }

    this.isSubmitting = false;
  }
}
