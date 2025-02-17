import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordUserComponent } from './change-password-user.component';

describe('ChangePasswordUserComponent', () => {
  let component: ChangePasswordUserComponent;
  let fixture: ComponentFixture<ChangePasswordUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordUserComponent]
    });
    fixture = TestBed.createComponent(ChangePasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
