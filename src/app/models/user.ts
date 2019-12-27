export class User {
    name: string;
    username: string;
    email: string;
    password: string;
    imageId: string;
    _id: string;

    constructor(name?: string, username?: string, password?: string, email?: string, imageId?: string) {
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
        if (imageId) {
            this.imageId = imageId;
        }
    }
}
