import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CuisineComponent } from './cuisine/cuisine.component';

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.css']
})
export class LocationPopupComponent implements OnInit {


  // constructor(public dialogRef: MatDialogRef<LocationPopupComponent>) { }
  
  // closeDialog() {
  //   this.dialogRef.close(LocationPopupComponent);
  // }
  
  constructor(private dialogRef:MatDialog) { }

  openDialogcuisine(){
    this.dialogRef.open(CuisineComponent)
  }
  closeDialog(){
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
  }

}
