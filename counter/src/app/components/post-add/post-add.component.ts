import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from 'src/app/state/post/post.action';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  postForm: FormGroup

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createPostFrom()
  }

  createPostFrom() {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  addPost() {
    document.getElementById('postForm').classList.add('ng-submitted')

    if (this.postForm.valid)
      this.store.dispatch(addPost({ post: this.postForm.value }))
  }

  formValidationError(value: string) {
    let formValue = this.postForm.get(value)

    if ((formValue.touched && !formValue.valid) || document.getElementById('postForm').classList.contains('ng-submitted')) {
      return formValue.errors?.['required'] ?
        `${value} is required` :
        formValue.errors?.['minlength'] ?
          `${value} should be minimum ${formValue.errors?.['minlength'].requiredLength} characters` :
          ''
    }
    return ''
  }

}
