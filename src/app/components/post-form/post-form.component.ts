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
  private post: Post = new Post();

  constructor(private _postsService: PostsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public addPost(post){
    this._postsService.addPost(post);
    this.router.navigate(['/posts']);
    this.post= new Post();
  }

}
