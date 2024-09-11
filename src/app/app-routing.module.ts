import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurChefComponent } from './our-chef/our-chef.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BreakfastComponent } from './ourMenuPages/breakfast/breakfast.component';
import { LunchComponent } from './ourMenuPages/lunch/lunch.component';
import { DinnerComponent } from './ourMenuPages/dinner/dinner.component';
import { SweetsComponent } from './ourMenuPages/sweets/sweets.component';
import { ModalComponent } from './modals/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  {
    path: 'ourmenu', component: OurmenuComponent, children: [
      { path: '', redirectTo: 'breakfast', pathMatch: 'full' },
      { path: 'breakfast', component: BreakfastComponent },
      { path: 'lunch', component: LunchComponent },
      { path: 'dinner', component: DinnerComponent },
      { path: 'sweets', component: SweetsComponent },
    ]
  },
  { path: 'ourchef', component: OurChefComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'dinner', component: DinnerComponent },
  { path: 'sweets', component: SweetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private navigationService: NavigationService) {
    this.navigationService.init()
   }


}
