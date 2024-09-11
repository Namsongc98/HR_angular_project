import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHomeComponent } from './core/layout/layout-home/layout-home.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
