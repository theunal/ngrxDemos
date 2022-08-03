import { addPost } from './post.action';

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
    })


)