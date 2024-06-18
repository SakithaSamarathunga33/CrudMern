import React, { Component } from 'react';
import axios from 'axios'

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  

  onSubmit= (e) =>{
    e.preventDefault();

    const {topic,description,postCategory} = this.state;

    const data ={
      topic:topic,
      description: description,
      postCategory: postCategory,
    }
    console.log(data)

    axios.post("/posts/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            topic:"",
            description:"",
            postCategory:"" 
          }
        )
      }
    })
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
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
                  &nbsp; Save
                  </button>
              </form>
            </div>
    );
  }
}
