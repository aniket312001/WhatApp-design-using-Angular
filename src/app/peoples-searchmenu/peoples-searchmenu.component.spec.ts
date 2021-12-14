import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesSearchmenuComponent } from './peoples-searchmenu.component';

describe('PeoplesSearchmenuComponent', () => {
  let component: PeoplesSearchmenuComponent;
  let fixture: ComponentFixture<PeoplesSearchmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesSearchmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesSearchmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
