import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  private post: Post;

  constructor(private route: ActivatedRoute,
              private _postsService: PostsService) { }

  ngOnInit() {
   this.route.params.subscribe(() => {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
            
    this.post = this._postsService.getPosts()
    .find((data: Post) => {
      return data.id === id;
        });
    });
  }
}
