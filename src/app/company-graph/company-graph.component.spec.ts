import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGraphComponent } from './company-graph.component';

describe('CompanyGraphComponent', () => {
  let component: CompanyGraphComponent;
  let fixture: ComponentFixture<CompanyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
