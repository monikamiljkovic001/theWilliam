import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
selectedImages: string[] = [];

breakfastImages = [
  './assets/images/breakfast1.jpg',
  './assets/images/breakfast2.jpg',
  './assets/images/breakfast3.jpg',
  './assets/images/breakfast4.jpg',
  './assets/images/breakfast5.jpg'
];

lunchImages = [
  './assets/images/lunch1.jpg',
  './assets/images/lunch2.jpg',
  './assets/images/lunch3.jpg',
  './assets/images/lunch4.jpg',
  './assets/images/lunch5.jpg'
];

dinnerImages = [
  './assets/images/dinner1.jpg',
  './assets/images/dinner2.jpg',
  './assets/images/dinner3.jpg',
  './assets/images/dinner4.jpg',
  './assets/images/dinner5.jpg'
];

sweetsImages = [
  './assets/images/sweets1.jpg',
  './assets/images/sweets2.jpg',
  './assets/images/sweets3.jpg',
  './assets/images/sweets4.jpg',
  './assets/images/sweets5.jpg'
];

openModal(images: string[]){
  this.selectedImages = images;
}

closeModal(){
  this.selectedImages = []
}



}
