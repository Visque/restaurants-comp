import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-display',
  templateUrl: './restaurants-display.component.html',
  styleUrls: ['./restaurants-display.component.css'],
})
export class RestaurantsDisplayComponent implements OnInit {
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
      id: 1,
      title: 'title1',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
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
      id: 1,
      title: 'title1',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
    {
      id: 1,
      title: 'title1',
      location: 'Hauz Khaz',
      tags: ['#tag1', '#tag2', '#tag3'],
      rating: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoog3QpmTpK4TQy-rUzeam_a0IRtDN8TFnEA&usqp=CAU',
    },
  ];

  @Input() theme = 'light-mode';

  onBookTable(restaurant: any) {
    console.log(`book a table for user in:`, restaurant);
  }

  constructor() {}

  ngOnInit(): void {}
}
