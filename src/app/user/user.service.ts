import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // リスト定義
  users: User[] = [];

  // コンストラクタ内でリストセット
  constructor() {
    this.users = [
      { user_id: 1, user_name: 'user1', user_email: 'user1@sample' },
      { user_id: 2, user_name: 'user2', user_email: 'user2@sample' },
      { user_id: 3, user_name: 'user3', user_email: 'user3@sample' },
    ];
  }

  // getter
  getUsers(): User[] {
    return this.users;
  }

  // getter with id
  getUser(id: number): User | undefined {
    return this.users.find(user => user.user_id == id);
  }

  // get last index + 1
  getSequence(): number {
    return this.users.slice(-1)[0].user_id + 1;   //ちゃんと連番になっている想定
  }

  // setter（更新用）
  setUser(user: User): void {
    for (let i=0; i<this.users.length; i++) {
      if (this.users[i].user_id == user.user_id) {
        this.users[i] = user;
      }
    }
  }

}
