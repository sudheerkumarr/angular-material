import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private router: Router,
    private postService: PostService,
    private formBuilder: FormBuilder) { }

  // postForm = new FormGroup({
  //   id: new FormControl(),
  //   userId: new FormControl(),
  //   title: new FormControl(''),
  //   body: new FormControl('')
  // })

  postForm = this.formBuilder.group({
    id: [, Validators.required],
    userId: [, Validators.required],
    title: ['', [Validators.required,
    Validators.minLength(3),
    Validators.pattern("[a-zA-Z]+$")
    ]],
    body: ['', [Validators.required]]
  });

  onAddPost() {
    console.log("onAddPost", this.postForm.value);
    let p = this.postService.addPost(this.postForm.value);
    console.log('p', p.subscribe({ next: p => console.log(p) }));
    this.router.navigate(['/posts']);
  }
}
