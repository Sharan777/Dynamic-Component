import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PopupComponent } from './popup/popup.component';

import { PopupService } from './popup/popup.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PopupComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ PopupComponent ],
  providers: [PopupService]
})
export class AppModule { }
