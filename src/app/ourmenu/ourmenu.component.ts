import { Component } from '@angular/core';

@Component({
  selector: 'app-ourmenu',
  templateUrl: './ourmenu.component.html',
  styleUrls: ['./ourmenu.component.css']
})
export class OurmenuComponent {
  modalVisible = false;

  openModal(): void {
    this.modalVisible = true;
  }

  handleCloseModal(): void {
    this.modalVisible = false;
  }
}
