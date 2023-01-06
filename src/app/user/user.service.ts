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
      { id: 1, name: 'user1', email: 'user1@sample' },
      { id: 2, name: 'user2', email: 'user2@sample' },
      { id: 3, name: 'user3', email: 'user3@sample' },
    ];
  }

  // getter
  getUsers(): User[] {
    return this.users;
  }

  // getter with id
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id == id);
  }

  // setter（更新用）
  setUser(user: User): void {
    for (let i=0; i<this.users.length; i++) {
      if (this.users[i].id == user.id) {
        this.users[i] = user;
      }
    }
  }

}
