import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListPage } from './TasksListPage';

describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
