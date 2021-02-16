import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreSectionComponent } from './components/explore-section/explore-section.component';
import { ChooseSectionComponent } from './components/choose-section/choose-section.component';
import { PopularSectionComponent } from './components/popular-section/popular-section.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePageComponent, 
    NavbarComponent, 
    ExploreSectionComponent,
    ChooseSectionComponent,
    PopularSectionComponent
  ]
})
export class HomePageModule { }
