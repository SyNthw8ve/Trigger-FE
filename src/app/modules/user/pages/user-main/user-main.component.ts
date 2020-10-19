import { Component, OnInit } from '@angular/core';
import { MainSectionComponent } from 'src/app/shared/components/profile-common/main-section/main-section.component';
import { LeftSectionComponent } from 'src/app/shared/components/profile-common/left-section/left-section.component';


@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
})
export class UserMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
