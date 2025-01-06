import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-report-bug',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './report-bug.component.html',
  styleUrl: './report-bug.component.scss'
})
export class ReportBugComponent {
  bugForm: FormGroup;
  fileError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.bugForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      consent: [false, Validators.requiredTrue],
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
    if (this.bugForm.valid) {
      console.log('Bug Report:', this.bugForm.value);
      alert('Bug report submitted successfully!');
      this.bugForm.reset();
    }
  }

  resetForm(): void {
    this.bugForm.reset();
  }
}
