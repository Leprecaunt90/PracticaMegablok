import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiSelectorComponent } from './wifi-selector.component';

describe('WifiSelectorComponent', () => {
  let component: WifiSelectorComponent;
  let fixture: ComponentFixture<WifiSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
