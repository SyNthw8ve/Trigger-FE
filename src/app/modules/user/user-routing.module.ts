import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserMainComponent } from './pages/user-main/user-main.component';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { UserNotificationMatchesComponent } from './pages/user-notification-matches/user-notification-matches.component';
import { UserNotificationRecommendationsComponent } from './pages/user-notification-recommendations/user-notification-recommendations.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    //canActivate: [LoginGuard],
    children: [

      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'user-notifications-matches',
        component: UserNotificationMatchesComponent
      },
      {
        path: 'user-notification-recommendations',
        component: UserNotificationRecommendationsComponent
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
