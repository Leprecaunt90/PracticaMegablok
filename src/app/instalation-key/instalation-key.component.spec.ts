import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalationKeyComponent } from './instalation-key.component';

describe('InstalationKeyComponent', () => {
  let component: InstalationKeyComponent;
  let fixture: ComponentFixture<InstalationKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalationKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalationKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
