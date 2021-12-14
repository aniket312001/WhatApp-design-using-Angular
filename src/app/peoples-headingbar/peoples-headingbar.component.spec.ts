import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesHeadingbarComponent } from './peoples-headingbar.component';

describe('PeoplesHeadingbarComponent', () => {
  let component: PeoplesHeadingbarComponent;
  let fixture: ComponentFixture<PeoplesHeadingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesHeadingbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesHeadingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
