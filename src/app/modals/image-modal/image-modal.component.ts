import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

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
    else {
      this.currentIndex = 0; 
    }

  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageList.length - 1; 
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.previousImage();
    }
  }
}
