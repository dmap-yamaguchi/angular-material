import { Component, OnInit } from '@angular/core';
// Userクラスのインポート
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // リスト定義
  users: User[] = [];

  // ラベル
  displayedColumns: string[] = [ 'id', 'name', 'email' ];

  constructor(
    private service: UserService,
  ) { }

  ngOnInit(): void {
    // ユーザー一覧（Store等から取得する）
    this.users = this.service.getUsers();
  }
}
