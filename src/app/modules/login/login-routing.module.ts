import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
        {
            path: 'login',
            component: LoginPageComponent
        },
        {
            path: 'register',
            component: RegisterPageComponent
        },
        {
            path: 'confirm',
            component: ConfirmationPageComponent,
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
