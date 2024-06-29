import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogtabPage } from './logtab.page';

describe('LogtabPage', () => {
  let component: LogtabPage;
  let fixture: ComponentFixture<LogtabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
