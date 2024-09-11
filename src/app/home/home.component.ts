import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

isModalVisible: boolean = false;
isSubmitted: boolean = false;

closeModal() {
this.isModalVisible = false;
}

openModal() {
this.isModalVisible = true
}

  bookingForm!: FormGroup;
  successfullySent = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.isSubmitted = true;
      console.log(this.bookingForm.value);
      setTimeout(() => {
        this.isSubmitted = false;
      }, 4000);
      this.bookingForm.reset();
    } else {
      this.bookingForm.markAllAsTouched(); 
      this.isSubmitted = false;
    }
  }
}
