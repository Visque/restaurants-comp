import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  
  constructor() { }
  cities = [{
    cityname: 'Delhi',
    img: 'assets/images/newdelhi_icon.PNG'
  },
  {
    cityname: 'Chennai',
    img: 'assets/images/newdelhi_icon.PNG'
  },
  {
    cityname: 'Hyderabad',
    img: 'assets/images/newdelhi_icon.PNG'
  }]
  
  ngOnInit(): void {
  }

}
