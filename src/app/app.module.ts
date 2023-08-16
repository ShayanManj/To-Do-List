import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { HeaderComponent } from './header/header.component';
import { ActiveCompletedComponent } from './active-completed/active-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveCompletedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdkDropListGroup, 
    CdkDropList, 
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
