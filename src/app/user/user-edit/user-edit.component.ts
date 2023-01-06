import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { MessageDialogComponent } from 'src/app/common/message-dialog/message-dialog.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // FormBuilder用
  form: FormGroup;
  get user_id(): AbstractControl { return this.form.get('user_id')!; }
  get user_name(): AbstractControl { return this.form.get('user_name')!; }
  get user_email(): AbstractControl { return this.form.get('user_email')!; }

  // ユーザー初期値
  user: User = { user_id: 0, user_name: '', user_email: '' };

  constructor(
    // ダイアログ表示のため？
    public  dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    // Material
    private dialog: MatDialog,
    private service:  UserService,
    private formBuilder: FormBuilder,
  ) {
    // FormGroup
    this.form = formBuilder.group({
      user_id: 'a',
      user_name: 'b',
      email: 'c',
    });
  }

  ngOnInit(): void {
  }

  // 更新ボタン
  onSubmit(form: any): void {
    // formから値をセット
    let user = {
      user_id:    form.user_id,
      user_name:  form.user_name,
      user_email: form.user_email,
    };

    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '200px',
      data: {
        title: 'Confirm',
        message: 'OK?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.setUser(user);
        this.dialogRef.close();
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
