const initState = {
posts:[
    {id: '1', title: 'blah blah blah', body: 'yada yada yada'},
    {id: '2', title: ' go gog ogo', body: 'skjghf hnwefk fhewj'},
    {id: '3', title: ' nsjke hbjew ', body: 'ejhgf hvejf erh'}
    ]
}


const rootReducer = (state, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state, 
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;