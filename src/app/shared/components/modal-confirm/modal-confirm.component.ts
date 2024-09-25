import { Component, OnInit } from '@angular/core';
import { DialogConfirmService } from 'src/app/core/services/dialog-confirm.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  constructor(private dialogService: DialogConfirmService) { }



  ngOnInit(): void {
    this.dialogService
    console.log(this.dialogService)
  }

  handleCancel() {
    console.log("handleCancel")
  }
  handleOk() {
    console.log("handleOk")
  }

}
