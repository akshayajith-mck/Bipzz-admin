import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingManagementVerifiedComponent } from './listing-management-verified.component';

describe('ListingManagementVerifiedComponent', () => {
  let component: ListingManagementVerifiedComponent;
  let fixture: ComponentFixture<ListingManagementVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient, HttpClientModule],
      declarations: [ListingManagementVerifiedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingManagementVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
