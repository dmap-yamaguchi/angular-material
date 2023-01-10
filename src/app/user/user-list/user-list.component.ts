import { Component, OnInit } from '@angular/core';
// Userクラスのインポート
import { User } from '../user';
import { UserService } from '../user.service';

import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MessageDialogComponent } from 'src/app/common/message-dialog/message-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // リスト定義
  users: User[] = [];

  // ラベル
  displayedColumns: string[] = [ 'id', 'update', 'name', 'email' ];

  constructor(
    // Material
    private dialog:   MatDialog,
    private service:  UserService,
  ) { }

  ngOnInit(): void {
    // ユーザー一覧（Store等から取得する）
    this.users = this.service.getUsers();
  }

  // 追加ボタン
  addData(): void {
    // 追加ダイアログ表示
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '640px',
      disableClose: true,
      data: {
        title:    'USER_ADD',
        message:  'message',
        data:     '',
      }
    });
  }

  // 編集ボタン
  updateData(form: any): void {
    // 指定のユーザーデータをセット
    let user = {
      user_id:     form.user_id,
      user_name:   form.user_name,
      user_email:  form.user_email,
    };

    // 編集ダイアログ表示
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '640px',
      disableClose: true,
      data: {
        title:    'USER_EDIT',
        message:  'mssage',
        data:     user,   //ここで遷移先にデータを渡す
      },
    });
  }
}
