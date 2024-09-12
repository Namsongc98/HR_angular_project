import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHomeModule } from './core/layout/layout-home/layout-home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutHomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
