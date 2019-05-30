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
@ViewChild(PopupDirective) contentHolder:PopupDirective;
header:string;
content:any;
_id:any;
popupService:any;
 
  constructor(private compFacRes:ComponentFactoryResolver) { }

  ngOnInit() {
    const compRef = this.compFacRes.resolveComponentFactory(this.content);
    this.contentHolder.viewContainerRef.createComponent(compRef);
  }
  frame(comp, config, service){
    this.content = comp;
    this.header = config.header;
    this.popupService = service;
  }

  close() {

  }



}