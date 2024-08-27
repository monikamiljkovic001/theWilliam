import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSideNavOpen = false;
  sidenavLinks = [
    { path: 'about', label: 'The William' },
    { path: 'reservation', label: 'Reservation' },
    { path: 'ourmenu', label: 'Our Menu' },
    { path: 'ourchef', label: 'Our Chef' },
    { path: 'gallery', label: 'Gallery' },
    { path: 'contact', label: 'Contact' }
  ];

  toggleSidenav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    if (this.isSideNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  } 

  onLinkClick(event: Event) {
    if ((event.target as HTMLElement).tagName === 'A') {
      this.toggleSidenav(); 
    }
  }
}
