export class Post {
    id: string;
    title: string;
    description: string;
    postedBy: string;
    likes: number;
    likedBy: string[];
    dislikes: number;
    dislikedBy: string[];

    constructor(id?: string, title?: string, description?: string, postedBy?: string, likes?: number, likedBy?: string[], dislikes?: number, dislikedBy?: string[]) {
        if(id) {
            this.id = id;
        }
        if(title) {
            this.title = title;
        }
        if(description) {
            this.description = description;
        }
        if(postedBy) {
            this.postedBy = postedBy;
        }
        if(likes) {
            this.likes = likes;
        }
        if(likedBy) {
            this.likedBy = likedBy;
        } else {
            this.likedBy = [];
        }
        if(dislikes) {
            this.dislikes = dislikes;
        }
        if(dislikedBy) {
            this.dislikedBy = dislikedBy;
        } else {
            this.dislikedBy = [];
        }
    }
}
