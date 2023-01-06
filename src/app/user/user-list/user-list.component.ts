import { Component } from '@angular/core';
// Userクラスのインポート
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  // ラベル
  displayedColumns: string[] = [ 'id', 'name', 'email' ];

  // ユーザー一覧（Store等から取得する）
  users: User[] = [
    { id: 1, name: 'user1', email: 'user1@sample' },
    { id: 2, name: 'user2', email: 'user2@sample' },
    { id: 3, name: 'user3', email: 'user3@sample' },
  ];
}
