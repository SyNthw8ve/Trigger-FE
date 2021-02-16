import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectVacanciesManagerComponent } from './project-vacancies-manager.component';

describe('ProjectVacanciesManagerComponent', () => {
  let component: ProjectVacanciesManagerComponent;
  let fixture: ComponentFixture<ProjectVacanciesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectVacanciesManagerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectVacanciesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
