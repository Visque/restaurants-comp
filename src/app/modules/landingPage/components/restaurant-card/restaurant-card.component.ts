import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant: any;
  @Output() onBookTable: EventEmitter<any> = new EventEmitter();
  @Input() theme: any;

  constructor() {}

  ngOnInit(): void {}
}
