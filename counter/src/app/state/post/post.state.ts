

export interface Post {
    id: number
    title: string
    description: string
}

export interface PostState {
    posts: Post[]
}


export const initialState: PostState = {
    posts: [
        {
            id: 1,
            title: 'sample title 1',
            description: 'sample description 1'
        },
        {
            id: 2,
            title: 'sample title 2',
            description: 'sample description 2'
        }
    ]
}