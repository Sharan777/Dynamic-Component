import { Component, OnInit, ViewChild,
ComponentFactoryResolver } from '@angular/core';
import { PopupDirective } from './popup.directive'
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit { 

  constructor() { }
  ngOnInit() {  
  }

}