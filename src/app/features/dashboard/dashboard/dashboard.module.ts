import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
