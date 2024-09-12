import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHomeModule } from './core/layout/layout-home/layout-home.module';
import { TitlePageComponent } from './shared/components/title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
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
