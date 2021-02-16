import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerNotificationMatchesComponent } from './manager-notification-matches.component';

describe('ManagerNotificationMatchesComponent', () => {
  let component: ManagerNotificationMatchesComponent;
  let fixture: ComponentFixture<ManagerNotificationMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNotificationMatchesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerNotificationMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
