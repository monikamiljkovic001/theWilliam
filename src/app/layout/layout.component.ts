import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showLines: boolean = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.onResize();
    this.navigationService.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.showLines = window.innerWidth >= 769;
  }

  scrollToTop(event: Event) {
    event.preventDefault();  
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      contentWrapper.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

}
