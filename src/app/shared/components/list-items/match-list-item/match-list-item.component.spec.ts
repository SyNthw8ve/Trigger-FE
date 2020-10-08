import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchListItemComponent } from './match-list-item.component';

describe('MatchListItemComponent', () => {
  let component: MatchListItemComponent;
  let fixture: ComponentFixture<MatchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
