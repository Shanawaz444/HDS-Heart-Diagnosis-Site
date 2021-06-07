import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import { PredectPageComponent } from './predect-page/predect-page.component';
import { FormsModule } from '@angular/forms';
import { PredectPageDialogComponent } from './predect-page-dialog/predect-page-dialog.component';
import {DataService} from './user_inputs/user_data_for_predection.Service'


@NgModule({
  declarations: [
    AppComponent,
    PredectPageComponent,
    PredectPageDialogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MyMaterialModule,
    FormsModule,
  
  
  ],
 
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
