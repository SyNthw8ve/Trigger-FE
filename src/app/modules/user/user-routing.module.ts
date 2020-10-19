import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserMainComponent } from './pages/user-main/user-main.component';
import { LoginGuard } from 'src/app/core/guards/login.guard';

const routes: Routes = [
  {
    path: 'main',
    component: UserMainComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
