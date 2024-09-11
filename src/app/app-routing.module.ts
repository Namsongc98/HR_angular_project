import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './shared/constant/routes-constant';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
