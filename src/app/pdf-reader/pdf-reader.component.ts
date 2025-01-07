import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pdf-reader',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit {
  contributionForm!: FormGroup;
  submissionStatus: string | null = null;

  codeTypes = ['JavaScript', 'TypeScript', 'Python', 'Java'];
  selectedFiles: { file: File, sizeInKB: number, icon: string }[] = []; // Include an icon field
  totalFileSizeInKB = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contributionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      addCode: this.fb.array([]),
    });

    this.addCodeSection();
  }

  get addCodeArray(): FormArray {
    return this.contributionForm.get('addCode') as FormArray;
  }

  addCodeSection(): void {
    const codeGroup = this.fb.group({
      codeType: ['', Validators.required],
      codeContent: ['', Validators.required]
    });
    this.addCodeArray.push(codeGroup);
  }

  removeCodeSection(index: number): void {
    this.addCodeArray.removeAt(index);
  }

  // Handle file selection with dynamic icons
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      const files = Array.from(input.files); // Convert FileList to an array
      files.forEach(file => {
        const sizeInKB = Math.round(file.size / 1024); // Calculate size in KB
        const icon = this.getFileIcon(file.name); // Determine icon based on file type
        this.selectedFiles.push({ file, sizeInKB, icon });
      });

      this.calculateTotalFileSize();
    }
  }

  // Determine the icon/image based on the file extension
  private getFileIcon(fileName: string): string {
    const fileExtension = fileName.split('.').pop()?.toLowerCase() || '';
    switch (fileExtension) {
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return 'picture1.png'; // Replace with your image path for pictures
      case 'txt':
        return 'picture2.png'; // Replace with your image path for .txt files
      case 'ts':
        return 'picture3.png'; // Replace with your image path for .ts files
      default:
        return 'picture5.png'; // Replace with your default image path
    }
  }

  calculateTotalFileSize(): void {
    this.totalFileSizeInKB = this.selectedFiles.reduce((total, file) => total + file.sizeInKB, 0);
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.calculateTotalFileSize();
  }

  onSubmit(): void {
    if (this.contributionForm.valid) {
      const contributionData = this.contributionForm.value;
      this.displayConfirmation(contributionData);
    } else {
      this.submissionStatus = "Please fill out all fields correctly.";
    }
  }

  displayConfirmation(contributionData: any): void {
    console.log('Contribution Submitted:', contributionData);
    console.log('Uploaded Files:', this.selectedFiles);

    this.submissionStatus = "Your contribution has been successfully submitted!";
    this.contributionForm.reset();
    this.addCodeSection();
    this.selectedFiles = [];
    this.totalFileSizeInKB = 0;
  }
}
