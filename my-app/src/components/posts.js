import React, { Component } from 'react'
import axios from 'axios';


class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.orops.match.params.post_id;
        axios.get('https://jsonplaceholder.tyicode.com/post' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
            
            
        })
        this.setState({
            id: id
        })
    }
    render() {
        
        const post = this.state.post ? (
            <div className="post">
            <h4 className="center">{this.state.post.title}</h4>
            <p>{this.state.post.body}</p>
            </div>
            
            ) : (
            <div className="center">loading post</div>
            )
        
        return (
            <div className="container">
            <h4></h4>
            </div>
        )
    }
}

export default Post;