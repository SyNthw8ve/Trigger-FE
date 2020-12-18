import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserMainComponent } from './pages/user-main/user-main.component';
import { PresentationSectionComponent } from './components/profile/presentation-section/presentation-section.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserMainComponent, UserProfileComponent, PresentationSectionComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class UserModule { }
