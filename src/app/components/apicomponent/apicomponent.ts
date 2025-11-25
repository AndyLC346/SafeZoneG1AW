import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIScannerService } from '../../services/apiscanner';

@Component({
  selector: 'app-apicomponent',
  imports: [JsonPipe,FormsModule,CommonModule],
  templateUrl: './apicomponent.html',
  styleUrl: './apicomponent.css',
})
export class APIcomponent {
 file: File | null = null;
  url: string = '';
  result: any;
  loading: boolean = false;
  error: string = '';

  constructor(private APIS: APIScannerService) {}

    onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  analyzeFile() {
    if (!this.file) {
      this.error = 'Por favor selecciona un archivo';
      return;
    }

    this.loading = true;
    this.error = '';
    
    this.APIS.analyzeFile(this.file).subscribe({
      next: (response) => {
        this.result = response;
        this.loading = false;
        console.log('File analysis result:', this.result);
      },
      error: (error) => {
        this.error = 'Error al analizar el archivo: ' + error.message;
        this.loading = false;
        console.error('Error analyzing file:', error);
      }
    });
  }

}
