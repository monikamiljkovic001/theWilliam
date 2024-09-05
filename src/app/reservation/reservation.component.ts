import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

constructor(private bf: FormBuilder){}

successfullySent = false;
reservationForm!: FormGroup;

ngOnInit(): void {
  this.reservationForm = this.bf.group({
    person: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    name: ['', Validators.required],
    contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  })
}

onSubmit():void{
if(this.reservationForm.valid){
  this.reservationForm.reset({
  person:['']
  })
}
}

}
