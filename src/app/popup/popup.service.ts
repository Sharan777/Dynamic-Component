import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef
 } from '@angular/core';
 import {Subject, observable} from 'rxjs'
 import { PopupComponent } from './popup.component'

@Injectable()
export class PopupService {

  private popupSubject: Subject<any> = new Subject<any>();
  public popupObservable$: Observable<a>;

  counter:number=1;
  dialogs={}
  constructor(public compFactRes:ComponentFactoryResolver,
   public appRef:ApplicationRef, public injector:Injector ) {
     this.popupObservable$ = this.popupSubject.asObservable();
    }

  createDynamicPopUp(comp, config){
    const compRef = this.compFactRes.resolveComponentFactory(PopupComponent).create(this.injector);
    const id = "PopUp"+this.counter++;
    compRef.instance._id = id;
    compRef.instance.frame(comp, config, this);
    this.dialogs[id] = {compRef:compRef, hostview:compRef.hostView}
    this.appRef.attachView(compRef.hostView);
    const ele = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(ele);
  }

  deleteDynamicPopUp(id){
    if(this.dialogs[id]) {
       this.dialogs[id].compRef.destroy();
       this.appRef.detachView(this.dialogs[id].hostView);
     }

  }

}