import { style } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'mat-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls:['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('rating') public rating: number = 0;
  // tslint:disable-next-line:no-input-rename
  @Input('starCount') public starCount: number = 5;
  @Output() private ratingUpdated = new EventEmitter();
  public ratingArr: number[] = [];

  constructor() { }
  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: any) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}

