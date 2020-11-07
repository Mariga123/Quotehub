import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteDetailsComponent } from './add-quote-details.component';

describe('AddQuoteDetailsComponent', () => {
  let component: AddQuoteDetailsComponent;
  let fixture: ComponentFixture<AddQuoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuoteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
