import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',Validators.required],
      message:['',Validators.required, ]
    })

    
  }

onSubmit():void{
  if(this.emailForm.valid){
    console.log(this.emailForm.valid)
    this.emailForm.reset();
  }
}

}
