import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signInForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // Integrate API call here for user authentication
      console.log('Sign In form:', this.signInForm.value);
      // Redirect to dashboard after successful authentication
      this.router.navigate(['/dashboard']);
    }
  }
}