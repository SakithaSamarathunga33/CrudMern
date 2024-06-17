/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class CreatePost extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" type="text" placeholder="topic" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="description" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder=" postCategory" />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-block confirm-button">Confirm</button>
          </div>
        </div>
      
    );
  }
}
