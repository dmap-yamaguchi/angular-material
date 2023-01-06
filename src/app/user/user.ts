// ユーザークラスの作成
export class User {
    user_id: number;
    user_name: string;
    user_email: string;

    constructor() {
        this.user_id = 0;
        this.user_name = '';
        this.user_email = '';
    }
}