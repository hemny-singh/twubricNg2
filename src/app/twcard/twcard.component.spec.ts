import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwcardComponent } from './twcard.component';

describe('TwcardComponent', () => {
  let component: TwcardComponent;
  let fixture: ComponentFixture<TwcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
