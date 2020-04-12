import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() addPost: EventEmitter<Post> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  public post: Post;

  constructor() { }

  ngOnInit() {
    this.post = new Post();
  }

  addNewPost() {
    this.addPost.emit(this.post);
    this.closePostModal();
  }

  closePostModal() {
    this.close.emit();
  }

}
