import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

  retrievePosts(){
    axios.get("http://localhost:4000/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.posts.map(posts =>(
          <div>
            <p>{posts.topic}</p>
            <p>{posts.description}</p>
            <p>{posts.postCategory}</p>
          </div>

        ))}
      </div>
    )
  }
}
