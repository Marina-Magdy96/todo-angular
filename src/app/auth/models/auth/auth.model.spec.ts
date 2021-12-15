import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModel } from './auth.model';

describe('AuthModel', () => {
  let component: AuthModel;
  let fixture: ComponentFixture<AuthModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
