import { Component } from '@angular/core';

@Component({
  selector: 'app-our-chef',
  templateUrl: './our-chef.component.html',
  styleUrls: ['./our-chef.component.css']
})
export class OurChefComponent {


modalVisible: boolean = false;

openModal() {
  this.modalVisible = true;
  }

handleCloseModal() {
  this.modalVisible = false;
  }


}
