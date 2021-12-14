import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymessagesComponent } from './displaymessages.component';

describe('DisplaymessagesComponent', () => {
  let component: DisplaymessagesComponent;
  let fixture: ComponentFixture<DisplaymessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
