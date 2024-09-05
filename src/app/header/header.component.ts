import { Component, Host, HostListener } from '@angular/core';

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

  toggleSidenav(event: Event) {
    this.isSideNavOpen = !this.isSideNavOpen;
    event.stopPropagation();

    if (this.isSideNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

  } 

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent): void{
  const target = event.target as HTMLElement;
  const sidenav = document.querySelector('.sidenav');

  if(sidenav && !sidenav.contains(target) && this.isSideNavOpen){
    this.isSideNavOpen = false;
  }
  
}

  onLinkClick(event: Event) {  
      this.isSideNavOpen = false;
  }
}
