import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatevehicleserviceService } from './services/createvehicleservice.service';
import { AppErrorhandler } from './Common/app-error-handler';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
 
    VehicleCreateComponent,
 
    HomeComponent,
 
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'Home',component:HomeComponent},
      {path:'createvehicle',component:VehicleCreateComponent},
      {path:'edit/:id',component:EditVehicleComponent}
    ])
  ],
  providers: [CreatevehicleserviceService,{
    provide:ErrorHandler,useClass:AppErrorhandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
