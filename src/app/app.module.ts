import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { JioadminComponent } from './jioadmin/jioadmin.component';
import { AirtelComponent } from './airtel/airtel.component';
import { TrackingdetailsComponent } from './trackingdetails/trackingdetails.component';
import { DeliveryagentsComponent } from './deliveryagents/deliveryagents.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminhomeComponent,
    JioadminComponent,
    AirtelComponent,
    TrackingdetailsComponent,
    DeliveryagentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
