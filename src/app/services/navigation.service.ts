import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  init() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url.startsWith('/ourmenu') && ['breakfast', 'lunch', 'dinner', 'sweets'].includes(url.split('/')[2])) {
          return;
        }
        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
          contentWrapper.scrollTo(0, 0);
        }
      }
    });
  }

}
