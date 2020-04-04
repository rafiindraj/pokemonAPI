import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPComponent } from './detail-p.component';

describe('DetailPComponent', () => {
  let component: DetailPComponent;
  let fixture: ComponentFixture<DetailPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
