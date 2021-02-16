import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerNotificationFavoritesComponent } from './manager-notification-favorites.component';

describe('ManagerNotificationFavoritesComponent', () => {
  let component: ManagerNotificationFavoritesComponent;
  let fixture: ComponentFixture<ManagerNotificationFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNotificationFavoritesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerNotificationFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
