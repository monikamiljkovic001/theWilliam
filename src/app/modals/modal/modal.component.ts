import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  @Input() isVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  bookingForm!: FormGroup;
  successfullySent = false;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  close(): void {
    this.isVisible = false;
    this.closeModalEvent.emit(); 
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
        this.successfullySent = true;
        console.log(this.bookingForm.value);
  
      setTimeout(() => {
        this.successfullySent = false;
      }, 4000);
      this.bookingForm.reset();
      this.isSubmitted = true
    } else {
      this.bookingForm.markAllAsTouched();
      this.isSubmitted = false;
    }
  }
  
}
