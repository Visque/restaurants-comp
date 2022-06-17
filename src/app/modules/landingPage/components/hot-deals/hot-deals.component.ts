import { Component, OnInit } from '@angular/core';
import { RestaurantsDisplayComponent } from '../restaurants-display/restaurants-display.component';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css'],
})
export class HotDealsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  restaurants = [
    {
      id: 1,
      title: 'title1',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 2,
      title: 'title2',
      location: 'location2',
      tags: ['#tag4', '#tag5', '#tag6'],
      rating: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9HLSxlg9o3WbiowztKZEHR9Of6rsYMqrPg&usqp=CAU',
    },
    {
      id: 3,
      title: 'title3',
      location: 'location3',
      tags: ['#tag7', '#tag8', '#tag9'],
      rating: '3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEB5SNGe8iMfRtGtHuHUQoKI1LtyCbOEHhnA&usqp=CAU',
    },
    {
      id: 4,
      title: 'title4',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 5,
      title: 'title5',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 6,
      title: 'title6',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
  ];

  start = 0;
  nextUnclickable = false;
  prevUnclickable = true;

  HotDealsRestaurants = this.restaurants.slice(this.start, this.start + 4);

  onNext() {
    if (this.start == this.restaurants.length - 4) {
      this.nextUnclickable = true;
      return;
    }
    this.prevUnclickable = false;
    this.start++;
    console.log('next');
    this.HotDealsRestaurants = this.restaurants.slice(
      this.start,
      this.start + 4
    );
  }

  onPrev() {
    if (this.start == 0) {
      this.prevUnclickable = true;
      return;
    }
    this.nextUnclickable = false;
    this.start--;
    console.log('prev');
    this.HotDealsRestaurants = this.restaurants.slice(
      this.start,
      this.start + 4
    );
  }
}
