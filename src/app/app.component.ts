import { Component } from '@angular/core';
import { PopupService } from './popup/popup.service';
 import { DeveloperComponent } from './developer/developer.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Dynamic Component';

  constructor(public popUpSVC:PopupService){

  }

  ngOnInit() {
    console.log('app');
  }
  openPopUp() {
    this.popUpSVC.createDynamicPopUp(DeveloperComponent,{header:'Developer header'})
  }
  
}
