import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modalVisible = false;
  isSideNavOpen = false;

  sidenavLinks = [

    { path: 'about', label: 'The William' },
    { path: 'ourmenu', label: 'Our Menu' },
    { path: 'ourchef', label: 'Our Chef' },
    { path: 'gallery', label: 'Gallery' },
    { path: 'contact', label: 'Contact' }
  ];

  openModal(): void {
    this.modalVisible = true;
  }

  handleCloseModal(): void {
    this.modalVisible = false;
  }


  toggleSidenav(event: Event) {
    event.stopPropagation();
    this.isSideNavOpen = !this.isSideNavOpen;
    this.manageBodyScroll();
  }


  closeSidenav() {
    this.isSideNavOpen = false;
    this.manageBodyScroll();
  }


  private manageBodyScroll() {
    if (this.isSideNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sidenav = document.querySelector('.sidenav');

    if (sidenav && !sidenav.contains(target) && this.isSideNavOpen) {
      this.closeSidenav();
    }
  }

  isPopupOpen: boolean = false;

  onLinkClick(event: Event) {  
    this.closeSidenav();
  }

}
