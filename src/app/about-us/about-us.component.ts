import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{

ngOnInit(): void {
this.onResize()
}

showLines!:boolean;

@HostListener('window:resize', ['$event'])
onResize(event?:any) {
  this.showLines = window.innerWidth >= 1024;
}

}
