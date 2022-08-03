import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/state/post/post.state';
import { getPosts } from 'src/app/state/post/post.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

 

}
