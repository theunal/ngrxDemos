import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';



const getPostState = createFeatureSelector<PostState>('posts')

export const getPosts = createSelector(getPostState, (state) => {
    return state.posts
})