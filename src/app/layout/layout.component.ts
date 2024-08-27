import { Component, HostListener, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  showLines: boolean = false;

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.showLines = window.innerWidth >= 1024;
  }

}
