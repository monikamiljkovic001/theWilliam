import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { OurChefComponent } from './our-chef/our-chef.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InsideLayoutComponent } from './inside-layout/inside-layout.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { BreakfastComponent } from './ourMenuPages/breakfast/breakfast.component';
import { LunchComponent } from './ourMenuPages/lunch/lunch.component';
import { DinnerComponent } from './ourMenuPages/dinner/dinner.component';
import { SweetsComponent } from './ourMenuPages/sweets/sweets.component';

import { MapComponent } from "./map/map.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    AboutUsComponent,
    FooterComponent,
    ReservationComponent,
    OurmenuComponent,
    OurChefComponent,
    GalleryComponent,
    ContactComponent,
    InsideLayoutComponent,
    ImageModalComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    SweetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MapComponent,
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
