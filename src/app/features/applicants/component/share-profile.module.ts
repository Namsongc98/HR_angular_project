import { NgModule } from "@angular/core";
import { ProfileApplyComponent } from "./profile-apply/profile-apply.component";
import { ItemProfileComponent } from "./item-profile/item-profile.component";
import { CommonModule } from "@angular/common";
import { ItemPermitObtainedComponent } from './item-permit-obtained/item-permit-obtained.component';
import { ItemEducationComponent } from './item-education/item-education.component';
import { ItemLanguagesComponent } from './item-languages/item-languages.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
    declarations: [ProfileApplyComponent, ItemProfileComponent, ItemPermitObtainedComponent, ItemEducationComponent, ItemLanguagesComponent],
    imports: [CommonModule,NzDividerModule],
    exports: [ProfileApplyComponent, ItemProfileComponent],
})
export class SharedProfileModule { }