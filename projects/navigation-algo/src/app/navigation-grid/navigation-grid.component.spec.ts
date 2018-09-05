import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGridComponent } from './navigation-grid.component';

describe('NavigationGridComponent', () => {
  let component: NavigationGridComponent;
  let fixture: ComponentFixture<NavigationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
