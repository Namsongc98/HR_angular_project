import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogConfirmService } from 'src/app/core/services/dialog-confirm.service';
import { IDialogConfirm } from 'src/app/module/interface/common';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
})
export class ModalConfirmComponent implements OnInit {
  dialog: IDialogConfirm = {
    isVisible: false,
    title: '',
    content: '',
    body:'',
    footer: [],
  }
  dialogSubscription!: Subscription;
  constructor(private dialogService: DialogConfirmService) { }
  ngOnInit() {
    this.dialogSubscription = this.dialogService.getDialog().subscribe((dialog: IDialogConfirm) => {
      this.dialog = dialog;
    })
  }
  ngAfterContentInit() {

  }
  handleCancel() {
    this.dialogService.closeDialog()
  }
  handleOk() {
    this.dialogService.closeDialog()
  }
  ngOnDestroy() {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }
}
