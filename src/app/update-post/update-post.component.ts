import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  post: any;


  postUpdateForm = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(''),
    body: new FormControl('')
  })

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.postService.getPostById(parseInt(id)).subscribe({
      next: (res) => {
        this.post = res; console.log(this.post),
          this.postUpdateForm.setValue({
            userId: this.post.userId,
            id: this.post.id,
            title: this.post.title,
            body: this.post.body
          })
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed')
    });
  }

  onSubmit() {
    this.postService.updatePost(this.postUpdateForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.post = res;
        window.alert("update post with id: " + this.post.id)
      },
      error: (err) => console.log(err),
      complete: () => console.log("Completed!!")
    });
    this.router.navigate(['/posts']);
  }

}
