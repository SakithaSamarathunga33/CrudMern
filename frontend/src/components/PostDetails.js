import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


class PostDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.id; 

    axios.get(`/posts/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
  
  render() {
    
    const {topic,description,postCategory} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
        <h4>{topic}</h4>
        <hr/>

        <dl className="row">
          <dt className="col-sm-3">description</dt>
          <dd className="col-sm-9">{description}</dd>

          <dt className="col-sm-3">postCategory</dt>
          <dd className="col-sm-9">{postCategory}</dd>
        </dl>
        
      </div>
    )
  }
}

// New functional component to use useParams hook
function PostDetailsWithParams() {
  const { id } = useParams();
  return <PostDetails id={id} />;
}

// Export the new functional component instead of the class component
export default PostDetailsWithParams;
