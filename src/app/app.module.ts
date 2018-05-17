import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgMaterialModule } from './modules/ng-material/ng-material.module'
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component'
import { AppRoutingModule } from './/app-routing.module';
import { PlannerComponent } from './planner/planner.component';
import { GmapComponent } from './shaerd/gmap/gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlannerComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
