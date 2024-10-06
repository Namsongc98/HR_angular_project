import { NgModule } from "@angular/core";
import { ProfileApplyComponent } from "./profile-apply/profile-apply.component";
import { CommonModule } from "@angular/common";
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
    declarations: [ProfileApplyComponent],
    imports: [CommonModule,NzDividerModule],
    exports: [ProfileApplyComponent],
})
export class SharedProfileModule { }