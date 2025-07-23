import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private postService: PostService) { }

  posts: any = []

  // GET - All posts
  ngOnInit() {
    this.postService.getAllPosts().subscribe({
      next: (res) => { console.log(res); this.posts = res },
      error: (err) => console.log(err),
      complete: () => console.log("Completed")
    });
  }

  // Delete - Post by id
  onDelete(id) {
    console.log('component-onDelete: ', id);
    this.postService.deletePost(id);
    this.posts = this.posts.filter((p: Post) => { p.id != id });
  }
}
