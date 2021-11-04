import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewlistComponent } from './core/viewlist/viewlist/viewlist.component';
import { HeaderComponent } from './core/header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentsComponent } from './core/addstudents/addstudents/addstudents.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { EditstudentsComponent } from './core/editstudents/editstudents/editstudents.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewlistComponent,
    HeaderComponent,
    AddstudentsComponent,
    FooterComponent,
    EditstudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
