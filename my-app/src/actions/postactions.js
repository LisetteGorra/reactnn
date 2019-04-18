//create an action to delete a post

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id 
    }
}