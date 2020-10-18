import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';

import { MediaSectionComponent } from './components/media-section/media-section.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent, 
    ConfirmationPageComponent,
    MediaSectionComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
