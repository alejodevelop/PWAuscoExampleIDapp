import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdViewComponent } from './id-view.component';

describe('IdViewComponent', () => {
  let component: IdViewComponent;
  let fixture: ComponentFixture<IdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
