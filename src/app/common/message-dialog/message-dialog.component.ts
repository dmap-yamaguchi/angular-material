import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConst } from 'src/app/app-const';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  // パラメータ
  // crud: string ='';
  title: string = 'title';
  ret: string = '';
  message: string = 'message';

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
  ) {
    // this.crud   = param.crud;
    this.title  = this.title;
    this.ret    = param.data.ret;

    // 定数化推奨
    if (param.data.ret == AppConst.RET_SUCCESS) {
      this.message = '正常終了';
    } else if (param.data.ret == AppConst.RET_INVALID_INPUT) {
      this.message = '入力項目にエラー';
    } else if (param.data.ret == AppConst.RET_SERVER_ERROR) {
      this.message = 'サーバー処理エラー';
    } else {
      this.message = '謎のエラー';
    }
  }

  ngOnInit(): void {
  }

  closeClick(): void {
    this.dialogRef.close();
  }
}
