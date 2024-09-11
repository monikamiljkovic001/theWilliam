import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-special-on-menu-modal',
  templateUrl: './special-on-menu-modal.component.html',
  styleUrl: './special-on-menu-modal.component.css'
})
export class SpecialOnMenuModalComponent {

@Input() isVisible: boolean = false;

@Output() closeModalEvent = new EventEmitter<void>();

close(){
this.isVisible = false;
this.closeModalEvent.emit()
}

}
