import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSectionComponent } from './components/profile-common/main-section/main-section.component';
import { LeftSectionComponent } from './components/profile-common/left-section/left-section.component';

@NgModule({
  declarations: [MainSectionComponent, LeftSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [MainSectionComponent, LeftSectionComponent]
})
export class SharedModule { }
