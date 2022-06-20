import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEditionComponent } from './form-create-edition.component';

describe('FormCreateEditionComponent', () => {
  let component: FormCreateEditionComponent;
  let fixture: ComponentFixture<FormCreateEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
