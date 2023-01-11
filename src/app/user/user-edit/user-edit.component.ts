import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { MyCommonModule } from '../../common/common.module';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // FormBuilder用
  form: FormGroup;
  get user_id(): AbstractControl { return this.form.get('user_id')!; }  // FireStoreとかで使う？
  get user_name(): AbstractControl { return this.form.get('user_name')!; }
  get user_email(): AbstractControl { return this.form.get('user_email')!; }

  // ユーザー初期値
  user: User = { user_id: 0, user_name: '', user_email: '' };

  // 前画面データ用変数
  data: any;

  ngOnInit(): void {
  }

  constructor(
    // ダイアログ表示のため？
    public  dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,   //ここで前画面からデータを受け取る
    // Material
    private service:  UserService,
    private formBuilder: FormBuilder,
  ) {
    // 前画面のデータ取得
    this.data = MyCommonModule.deepCopy(param.data);
    // Formの初期値
    this.form = this.formBuilder.group({
      user_id: this.data.user_id,
      user_name: this.data.user_name,
      user_email: this.data.user_email,
    });
  }

  // 更新ボタン
  onSubmit(form: any): void {
    var ret = confirm("更新します\nよろし？");

    if (ret) {
      // 更新時の値セット（HTML→TS）
      this.user.user_id     = this.user_id!.value;
      this.user.user_name   = this.user_name!.value;
      this.user.user_email  = this.user_email!.value;

      // 値の更新
      this.service.setUser(this.user);
      console.log(this.service.getUsers());

      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
