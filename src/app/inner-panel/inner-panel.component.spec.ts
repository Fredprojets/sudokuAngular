import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPanelComponent } from './inner-panel.component';

describe('InnerPanelComponent', () => {
  let component: InnerPanelComponent;
  let fixture: ComponentFixture<InnerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
