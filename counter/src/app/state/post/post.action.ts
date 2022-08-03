import { createAction, props } from '@ngrx/store';
import { Post } from './post.state';




export const addPost = createAction('addPost', props<{ post: Post }>())