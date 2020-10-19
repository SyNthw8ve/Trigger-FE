import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserMainComponent } from './pages/user-main/user-main.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserProfileComponent, UserMainComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
