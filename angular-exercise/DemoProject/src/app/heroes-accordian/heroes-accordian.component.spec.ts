import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAccordianComponent } from './heroes-accordian.component';

describe('HeroesAccordianComponent', () => {
  let component: HeroesAccordianComponent;
  let fixture: ComponentFixture<HeroesAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
