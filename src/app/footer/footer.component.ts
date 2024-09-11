import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
email: string = '';

sendEmail(){
  if(this.email){
    console.log('email has been sent' + this.email);
    this.email = '';
  }
}
}
