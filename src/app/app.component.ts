import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-ang';
  imagePath="assets/images/darkmode.png";
  mode='light-mode';
  changeMode(){
    this.mode==='light-mode'?this.mode='dark-mode':this.mode='light-mode';
    if(this.mode=='dark-mode'){
      this.imagePath="assets/images/lightmode.png"
    }
    else{
      this.imagePath="assets/images/darkmode.png"
    }
  }
}
