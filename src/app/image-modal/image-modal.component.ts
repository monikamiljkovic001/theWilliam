import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  
  @Input() imageList: string[] = [];
  @Output() closeModal = new EventEmitter<void>();
  currentIndex = 0;

  get currentImage(): string {
    return this.imageList[this.currentIndex];
  }

  close() {
    this.closeModal.emit();
  }

  nextImage() {
    if (this.currentIndex < this.imageList.length - 1) {
      this.currentIndex++;
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
