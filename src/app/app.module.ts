import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ExpandableTextAreaComponent }  from './expandable-textarea.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ExpandableTextAreaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
