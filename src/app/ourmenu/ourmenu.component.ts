import { Component } from '@angular/core';

@Component({
  selector: 'app-ourmenu',
  templateUrl: './ourmenu.component.html',
  styleUrls: ['./ourmenu.component.css']
})
export class OurmenuComponent {
  modalVisible = false;

  links = [
    { name: 'Breakfast', url: 'breakfast' },
    { name: 'Lunch', url: 'lunch' },
    { name: 'Dinner', url: 'dinner' },
    { name: 'Sweets', url: 'sweets' }
  ];

  openModal(): void {
    this.modalVisible = true;
  }

  handleCloseModal(): void {
    this.modalVisible = false;
  }
}
