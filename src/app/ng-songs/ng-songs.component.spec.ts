import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSongsComponent } from './ng-songs.component';

describe('NgSongsComponent', () => {
  let component: NgSongsComponent;
  let fixture: ComponentFixture<NgSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
