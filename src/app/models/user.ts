export class User {
    name: string;
    username: string;
    email: string;
    password: string;
    _id: string;

    constructor(name?: string, username?: string, password?: string, email?: string) {
        if (name) {
            this.name = name;
        }
        if (username) {
            this.username = username;
        }
        if (password) {
            this.password = password;
        }
        if (email) {
            this.email = email;
        }
    }
}
