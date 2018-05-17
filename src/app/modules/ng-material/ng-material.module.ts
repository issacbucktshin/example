import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports:[
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: []
})
export class NgMaterialModule { }
