import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';

const routes : Routes  = [
  //{ path: '', redirectTo: '/example', pathMatch: 'full' },
 // { path: 'example', component: HomeComponent},
  //{ path: 'planner', component: PlannerComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
