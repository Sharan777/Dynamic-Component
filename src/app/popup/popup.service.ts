import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef
 } from '@angular/core';
 import { PopupComponent } from './popup.component'

@Injectable()
export class PopupService {

  constructor(public compFactRes:ComponentFactoryResolver,
   public appRef:ApplicationRef, public injector:Injector ) { }

  createDynamicPopUp(){
    const compRef = this.compFactRes.resolveComponentFactory(PopupComponent).create(this.injector);
    this.appRef.attachView(compRef.hostView);
    const ele = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(ele);
  } 

}