import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleChatsComponent } from './people-chats.component';

describe('PeopleChatsComponent', () => {
  let component: PeopleChatsComponent;
  let fixture: ComponentFixture<PeopleChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
