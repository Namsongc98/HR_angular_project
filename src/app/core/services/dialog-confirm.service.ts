import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDialogConfirm } from 'src/app/module/interface/common';


@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  // Khởi tạo state với BehaviorSubject để có thể phát đi các giá trị mới
  private dialogSubject: BehaviorSubject<IDialogConfirm> = new BehaviorSubject<IDialogConfirm>({ isVisible: false, title: '', content: '', footer: [] });

  // Lấy state dưới dạng Observable
  public users$: Observable<IDialogConfirm> = this.dialogSubject.asObservable();

  constructor() { }

  getDialog(): IDialogConfirm {
    return this.dialogSubject.value;
  }

  addDialog(user: IDialogConfirm): void {
    const currentUsers = this.dialogSubject.value;
    this.dialogSubject.next(currentUsers); // Cập nhật state với người dùng mới
  }

  closeDialog(): void {
    this.dialogSubject.next({ isVisible: false, title: '', content: '', footer: [] }); // Reset danh sách người dùng
  }
}
