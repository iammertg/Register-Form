import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAutoSuggestionComponent } from './country-auto-suggestion.component';

describe('CountryAutoSuggestionComponent', () => {
  let component: CountryAutoSuggestionComponent;
  let fixture: ComponentFixture<CountryAutoSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAutoSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAutoSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
