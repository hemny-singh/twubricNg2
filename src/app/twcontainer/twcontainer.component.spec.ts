import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwcontainerComponent } from './twcontainer.component';

describe('TwcontainerComponent', () => {
  let component: TwcontainerComponent;
  let fixture: ComponentFixture<TwcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
