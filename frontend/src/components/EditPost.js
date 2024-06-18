import React, { Component } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

class EditPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      topic: "",
      description: "",
      postCategory: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id } = this.props.params; 

    const { topic, description, postCategory } = this.state;

    const data = {
      topic: topic,
      description: description,
      postCategory: postCategory,
    }
    console.log(data)

    axios.put(`/posts/update/${id}`, data).then((res) => {
      if(res.data.success){
        alert("Post updated successfully");
        this.setState({
          topic: "",
          description: "",
          postCategory: "" 
        });
        this.props.navigate('/');
      }
    })
  }

  componentDidMount() {
    const { id } = this.props.params; 

    axios.get(`/posts/${id}`).then((res) => {
      if(res.data.success){
        this.setState({
          topic: res.data.post.topic,
          description: res.data.post.description,
          postCategory: res.data.post.postCategory
        });
        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Topic</label>
            <input className="form-control" 
                   type="text" 
                   name="topic" 
                   placeholder="Enter topic" 
                   value={this.state.topic} 
                   onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Description</label>
            <input className="form-control" 
                   type="text" 
                   name="description"
                   placeholder="Enter description" 
                   value={this.state.description} 
                   onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>PostCategory</label>
            <input className="form-control" 
                   type="text" 
                   name="postCategory"
                   placeholder="Enter postCategory" 
                   value={this.state.postCategory}  
                   onChange={this.handleInputChange} />
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}

const EditPostWithRouter = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <EditPost {...props} params={params} navigate={navigate} />;
}

export default EditPostWithRouter;
