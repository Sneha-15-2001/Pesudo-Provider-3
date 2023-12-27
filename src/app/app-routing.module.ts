import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { JioadminComponent } from './jioadmin/jioadmin.component';
import { AirtelComponent } from './airtel/airtel.component';
import { TrackingdetailsComponent } from './trackingdetails/trackingdetails.component';
import { DeliveryagentsComponent } from './deliveryagents/deliveryagents.component';

const routes: Routes = [{
  path:'',
  component:RegisterComponent,
},
{
path:'admin',
component:AdminhomeComponent,
},
{
  path:'admin/jio',
  component:JioadminComponent,
},
{
  path:'admin/airtel',
  component:AirtelComponent,
},
{
  path:'trackingdetails',
  component:TrackingdetailsComponent,
},{
  path:'delivery-partner',
  component:DeliveryagentsComponent,
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
