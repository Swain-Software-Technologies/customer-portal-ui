import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { MainRoutes } from './routing/customer.main.routing';



@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
