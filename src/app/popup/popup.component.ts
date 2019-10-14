import {
  Component, OnInit, ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

    deletComp() {
    let element = document.getElementsByTagName('app-popup'), index;
    console.log(element);
    for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
    }
  }

}