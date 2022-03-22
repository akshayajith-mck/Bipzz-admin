import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingManagementNonVerifiedComponent } from './listing-management-non-verified.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListingManagementNonVerifiedComponent', () => {
  let component: ListingManagementNonVerifiedComponent;
  let fixture: ComponentFixture<ListingManagementNonVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule,
        RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [ListingManagementNonVerifiedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingManagementNonVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
