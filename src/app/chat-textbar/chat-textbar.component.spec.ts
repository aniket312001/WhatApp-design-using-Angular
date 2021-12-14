import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTextbarComponent } from './chat-textbar.component';

describe('ChatTextbarComponent', () => {
  let component: ChatTextbarComponent;
  let fixture: ComponentFixture<ChatTextbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTextbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTextbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
