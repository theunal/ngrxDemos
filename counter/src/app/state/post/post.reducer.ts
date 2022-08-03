import { addPost, updatePost } from './post.action';

import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';


export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}

const _postReducer = createReducer(initialState,

    on(addPost, (state, action) => {
        let post = { ...action.post }
        post.id = state.posts.length + 1

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),

    on(updatePost, (state: any, action: any) => {
        let updatedPost = state.posts.map((post : any) => {
            return post.id == action.post.id ? action.post : post
        })
        return {
            ...state,
            posts: updatedPost
        }
    })

)