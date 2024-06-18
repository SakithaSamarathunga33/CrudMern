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
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/posts/delete/${id}`).then((res) =>{
      alert("deleted successfully");
      this.retrievePosts();
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
              <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                <i className="fas fa-edit"></i> &nbsp;Edit
              </a>
              &nbsp;
                <button className="btn btn-danger" onClick={() => this.onDelete(posts._id)}>
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
