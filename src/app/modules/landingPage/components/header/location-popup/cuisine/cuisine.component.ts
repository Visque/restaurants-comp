import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }
  cuisinesList = ['Bar', 'Outdoor Dining', 'North Indian','South Indian', 'Cafe',
    'Bar', 'Outdoor Dining', 'North Indian','South Indian', 'Cafe',
    'Bar', 'Outdoor Dining', 'North Indian', 'South Indian','Cafe',
  ]
  closeDialog(){
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
  }

}
