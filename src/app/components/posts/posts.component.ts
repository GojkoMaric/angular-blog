import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private posts=[];

  constructor(private _postsService: PostsService) {
    this.posts=this._postsService.getPosts();
   }

  ngOnInit() {
  }

  public delete(post){
    this._postsService.deletePost(post);
  }

}
