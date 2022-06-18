import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsDisplayComponent } from '../restaurants-display/restaurants-display.component';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css'],
})
export class HotDealsComponent implements OnInit {
  @Input() theme = 'light-mode';

  screenWidth: any;

  start = 0;
  nextUnclickable = false;
  prevUnclickable = true;
  HotDealsLength = 4;
  HotDealsRestaurants: any;

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
    {
      id: 1,
      title: 'title7',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 1,
      title: 'title8',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 1,
      title: 'title9',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    console.log('calling resize');

    if (this.screenWidth <= 480) {
      this.HotDealsLength = 1;
    }
    if (this.screenWidth > 481 && this.screenWidth <= 767) {
      this.HotDealsLength = 2;
    }
    if (this.screenWidth > 768 && this.screenWidth <= 1024) {
      this.HotDealsLength = 3;
    }
    if (this.screenWidth > 1025 && this.screenWidth <= 1280) {
      this.HotDealsLength = 4;
    }
    if (this.screenWidth > 1281) {
      this.HotDealsLength = 5;
    }
    this.HotDealsRestaurants = this.restaurants.slice(
      this.start,
      this.start + this.HotDealsLength
    );
  }

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {}

  onNext() {
    if (this.start == this.restaurants.length - this.HotDealsLength) {
      this.nextUnclickable = true;
      return;
    }
    this.prevUnclickable = false;
    this.start++;
    console.log('next');
    this.HotDealsRestaurants = this.restaurants.slice(
      this.start,
      this.start + this.HotDealsLength
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
      this.start + this.HotDealsLength
    );
  }
}
