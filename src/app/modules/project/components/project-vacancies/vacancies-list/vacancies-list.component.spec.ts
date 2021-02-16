import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacanciesListComponent } from './vacancies-list.component';

describe('VacanciesListComponent', () => {
  let component: VacanciesListComponent;
  let fixture: ComponentFixture<VacanciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciesListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
