import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  private newPost: Post = new Post();

  constructor(private _postsService: PostsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public addPost(){
    this._postsService.addPost(this.newPost);
    this.router.navigate(['/posts']);
    // this.post= new Post();
  }

  public showPost(){
    alert(`
    Title: ${this.newPost.title}
    Text: ${this.newPost.text}
    Created at: ${this.newPost.created_at}`)
  }

}
