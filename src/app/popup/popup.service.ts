import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef
 } from '@angular/core';
 import { PopupComponent } from './popup.component'

@Injectable()
export class PopupService {

  counter:number=1;
  constructor(public compFactRes:ComponentFactoryResolver,
   public appRef:ApplicationRef, public injector:Injector ) { }

  createDynamicPopUp(comp, config){
    const compRef = this.compFactRes.resolveComponentFactory(PopupComponent).create(this.injector);
    compRef.instance._id = "PopUp"+this.counter++;
    compRef.instance.frame(comp, config, this);
    this.appRef.attachView(compRef.hostView);
    const ele = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(ele);
  }

  deleteDynamicPopUp(){

  }

}