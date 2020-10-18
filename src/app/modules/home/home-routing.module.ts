import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoggedGuard } from 'src/app/core/guards/logged.guard'; 

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [LoggedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
