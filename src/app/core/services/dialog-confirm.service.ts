import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDialogConfirm } from 'src/app/module/interface/common';


@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  // Khởi tạo state với BehaviorSubject để có thể phát đi các giá trị mới
  private _dialogSubject: BehaviorSubject<IDialogConfirm> = new BehaviorSubject<IDialogConfirm>({ isVisible: false, title: '', content: '', body: '', footer: [] });

  // Lấy state dưới dạng Observable
  public dialog$: Observable<IDialogConfirm> = this._dialogSubject.asObservable();

  constructor() { }

  getDialog() {
    return this._dialogSubject.asObservable();
  }

  setDialog(dialog: IDialogConfirm) {
    this._dialogSubject.next(dialog); 
  }

  closeDialog() {
    const currentDialog = this._dialogSubject.getValue();
    this._dialogSubject.next({ ...currentDialog, isVisible: false });
  }
}
