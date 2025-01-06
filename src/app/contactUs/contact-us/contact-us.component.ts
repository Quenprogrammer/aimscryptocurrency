import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  fileError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      this.fileError = 'File size must be less than 5MB.';
    } else {
      this.fileError = null;
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Contact Form Submitted:', this.contactForm.value);
      alert('Thank you for contacting us! We will get back to you soon.');
      this.contactForm.reset();
    }
  }

  resetForm(): void {
    this.contactForm.reset();
  }
}
