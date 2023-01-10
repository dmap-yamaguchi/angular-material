import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  // FormBuilder用
  form: FormGroup;
  get user_id(): AbstractControl { return this.form.get('user_id')!; }
  get user_name(): AbstractControl { return this.form.get('user_name')!; }
  get user_email(): AbstractControl { return this.form.get('user_email')!; }

  // ユーザー初期値（IDは連番）
  user: User = { user_id: this.service.getSequence(), user_name: '', user_email: '' };

  // 登録データ用変数
  data: any;

  ngOnInit(): void {
  }

  constructor(
    // ダイアログ表示のため？
    public  dialogRef: MatDialogRef<UserAddComponent>,
    // Material
    private dialog: MatDialog,
    private service:  UserService,
    private formBuilder: FormBuilder,
  ) {
    // Formの初期値
    this.form = this.formBuilder.group(this.user);
  }

  // 追加ボタン
  onSubmit(form: any): void {
    var ret = confirm("追加します\nよろし？");

    if (ret) {
      // 更新時の値セット（HTML→TS）
      this.user.user_id     = this.user_id!.value;
      this.user.user_name   = this.user_name!.value;
      this.user.user_email  = this.user_email!.value;

      // 値の追加
      console.log(this.service.getUsers());

      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
