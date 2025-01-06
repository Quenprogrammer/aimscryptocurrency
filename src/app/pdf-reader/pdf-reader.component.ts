import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pdf-reader',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit {
  contributionForm!: FormGroup;
  submissionStatus: string | null = null;

  codeTypes = ['JavaScript', 'TypeScript', 'Python', 'Java']; // Example code types

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contributionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      addCode: this.fb.array([]), // Array to hold dynamic code input
    });

    // Initialize with one code section
    this.addCodeSection();
  }

  // Getter for FormArray
  get addCodeArray(): FormArray {
    return this.contributionForm.get('addCode') as FormArray;
  }

  // Add code method
  addCodeSection(): void {
    const codeGroup = this.fb.group({
      codeType: ['', Validators.required],
      codeContent: ['', Validators.required]
    });
    this.addCodeArray.push(codeGroup);
  }

  // Remove code method
  removeCodeSection(index: number): void {
    this.addCodeArray.removeAt(index);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.contributionForm.valid) {
      const contributionData = this.contributionForm.value;
      this.displayConfirmation(contributionData);
    } else {
      this.submissionStatus = "Please fill out all fields correctly.";
    }
  }

  // Display confirmation after form submission
  displayConfirmation(contributionData: any): void {
    console.log('Contribution Submitted:', contributionData);
    this.submissionStatus = "Your contribution has been successfully submitted!";
    this.contributionForm.reset();
    this.addCodeSection(); // Reinitialize code form for new submissions
  }
}
