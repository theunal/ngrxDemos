import { AppState } from 'src/app/store/app.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { getPostById } from 'src/app/state/post/post.selector';
import { Post } from 'src/app/state/post/post.state';
import { updatePost } from 'src/app/state/post/post.action';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html'
})
export class PostUpdateComponent implements OnInit {

  postUpdateForm: FormGroup

  post: Post

  id: number

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      let id = parseInt(res.get('id'))
      this.store.select(getPostById, { id }).subscribe(res => {
        this.post = res
        this.createUpdatePostFrom()
      })
    })
  }

  createUpdatePostFrom() {
    this.postUpdateForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(5)])
    })
  }

  updatePost() {
    document.getElementById('postUpdateForm').classList.add('ng-submitted')

    let post: Post = {
      id: this.post.id,
      title: this.postUpdateForm.value.title,
      description: this.postUpdateForm.value.description,
    }

    if (this.postUpdateForm.valid)
      this.store.dispatch(updatePost({ post }))
  }

  formValidationError(value: string) {
    let formValue = this.postUpdateForm.get(value)

    if ((formValue.touched && !formValue.valid) || document.getElementById('postUpdateForm').classList.contains('ng-submitted')) {
      return formValue.errors?.['required'] ?
        `${value} is required` :
        formValue.errors?.['minlength'] ?
          `${value} should be minimum ${formValue.errors?.['minlength'].requiredLength} characters` :
          ''
    }
    return ''
  }

}
