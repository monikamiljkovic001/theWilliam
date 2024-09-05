import { Component, HostListener, OnInit,  } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  showLines: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.showLines = window.innerWidth >= 769;
  }

 
  scrollToTop(event: Event) {
    event.preventDefault();  
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
