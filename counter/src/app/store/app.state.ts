import { counterReducer } from "../state/counter/counter.reducer";
import { CounterState } from "../state/counter/counter.state";
import { postReducer } from "../state/post/post.reducer";
import { PostState } from "../state/post/post.state";


export interface AppState {
    counter: CounterState
    post: PostState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}