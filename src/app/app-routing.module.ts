import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ルーティングに使用するコンポーネントのインポート
import { FormComponent } from './form/form.component';  // 指定するインポート名は指定ファイル内のクラス名に一致
import { UserListComponent } from './user/user-list/user-list.component'

// ここにコンポーネントのルーティングを記載
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },  // ページ指定なしで来た場合
  { path: 'form', component: FormComponent },           // サンプル画面を設定する
  { path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
