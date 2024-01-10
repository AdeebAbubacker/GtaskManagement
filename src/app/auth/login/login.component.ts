import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;
  error = '';
  loading: boolean = false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Mark all fields as touched to trigger validation messages
    if (this.loginForm) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.controls[key];
        control.markAsTouched();
      });
    }

    // Check if form is valid
    if (this.loginForm?.invalid) {
      this.error = 'Please fill in all required fields correctly';
      return;
    }

    // Reset error
    this.error = '';
    this.loading = true;

    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.loading = false;

        // Save remember me preference
        if (this.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        if (res.role === 'Admin') {
          this.router.navigate(['/admindashbaord']);
        } else {
          this.router.navigate(['/userdashboard']);
        }
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Invalid username or password. Please try again.';

        // Clear password for security
        this.password = '';

        // Reset the password field in the form
        if (this.loginForm) {
          this.loginForm.controls['password'].reset();
        }
      },
    });
  }

  // Toggle password visibility
  togglePasswordVisibility(event: Event) {
    event.preventDefault();
    const button = event.target as HTMLButtonElement;
    const input = button.parentElement?.querySelector(
      'input[type="password"], input[type="text"]'
    ) as HTMLInputElement;

    if (input) {
      if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈'; 
      } else {
        input.type = 'password';
        button.textContent = '👁️'; 
      }
    }
  }

  // Clear error when user starts typing
  onInputChange() {
    if (this.error) {
      this.error = '';
    }
  }
}
