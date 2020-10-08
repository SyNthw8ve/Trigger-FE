import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectVacanciesUserComponent } from './project-vacancies-user.component';

describe('ProjectVacanciesUserComponent', () => {
  let component: ProjectVacanciesUserComponent;
  let fixture: ComponentFixture<ProjectVacanciesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectVacanciesUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectVacanciesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
