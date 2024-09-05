import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookingForm!: FormGroup;
  successfullySent = false;

  constructor(private bf: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.bf.group({
      person: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.successfullySent = true;
  
      setTimeout(() => {
        this.successfullySent = false;
      }, 4000); 
  
      this.bookingForm.reset({
        person: this.bookingForm.get('person')?.value 
      }); 

    }
  }
}