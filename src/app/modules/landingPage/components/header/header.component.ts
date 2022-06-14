import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationPopupComponent } from './location-popup/location-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }
  Location="Delhi";
  mode='light-mode';
  changeMode(){
    this.mode==='light-mode'?this.mode='dark-mode':this.mode='light-mode';
  }
  openDialog(){
    this.dialogRef.open(LocationPopupComponent)
  }
  ngOnInit(): void {
  }

}
