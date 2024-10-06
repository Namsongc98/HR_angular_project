import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

import { DetailApplicantComponent } from './detail-applicant.component';
import { SharedProfileModule } from '../../component/share-profile.module';


@NgModule({
  declarations: [DetailApplicantComponent],
  imports: [
    CommonModule,
    SharedComponentModule,
    SharedProfileModule
  ]
})
export class DetailApplicantModule { }
