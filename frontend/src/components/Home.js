import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
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
      <div className="container">
        <p>All posts</p>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Post Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index) => (
            <tr>
              <th scope="row">{index+1}</th>
              <td>
              <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                {posts.topic}
                </a>
                </td>
              <td>{posts.description}</td>
              <td>{posts.postCategory}</td>
              <td>
                <button className="btn btn-warning" onClick={() => {/* your edit function here */}}>
                  <i className="fas fa-edit"></i> Edit
                  </button>
                <button className="btn btn-danger" onClick={() => {/* your delete function here */}}>
                   <i className="far fa-trash-alt"></i> Delete
                 </button>
            </td>
            </tr>
          ))}
        </tbody>
       </table>
        
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
        
      </div>
    )
  }
}
