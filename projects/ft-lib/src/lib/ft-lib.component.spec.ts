import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtLibComponent } from './ft-lib.component';

describe('FtLibComponent', () => {
  let component: FtLibComponent;
  let fixture: ComponentFixture<FtLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
