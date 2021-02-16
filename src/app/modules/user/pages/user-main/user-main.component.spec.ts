import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserMainComponent } from './user-main.component';

describe('UserMainComponent', () => {
  let component: UserMainComponent;
  let fixture: ComponentFixture<UserMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
