import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  };

  projectTypes = [
    'Kitchen Design',
    'Bathroom Renovation',
    'Full Home Renovation',
    'Custom Cabinetry',
    'Interior Design Consultation',
    'Other'
  ];

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      
      // Reset form after success
      this.formData = {
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      };
    }, 1500);
  }
}
