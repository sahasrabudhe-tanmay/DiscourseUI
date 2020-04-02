import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dc-post',
  templateUrl: './dc-post.component.html',
  styleUrls: ['./dc-post.component.css']
})
export class DcPostComponent implements OnInit {

  @Input() id: string;
  @Input() creator: string;
  @Input() title: string;
  @Input() content: string;
  @Input() likes: number;
  @Input() dislikes: number;
  @Output() liked: EventEmitter<string> = new EventEmitter<string>();
  @Output() disliked: EventEmitter<string> = new EventEmitter<string>();

  postLiked: boolean = false;
  postDisliked: boolean = false;
  likeCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.postLiked = true;
    this.postDisliked = false;
    this.likes++;
    this.updateLikeCounter();
    this.liked.emit(this.id);
  }

  onDislike() {
    this.postLiked = false;
    this.postDisliked = true;
    this.dislikes++;
    this.updateLikeCounter();
    this.disliked.emit(this.id);
  }

  onClear() {
    if(this.postLiked) {
      this.postLiked = false;
      this.likes--;
    } else if(this.postDisliked) {
      this.postDisliked = false;
      this.dislikes--;
    }
    this.updateLikeCounter();
  }

  updateLikeCounter() {
    this.likeCounter = this.likes - this.dislikes;
  }

}
