import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import PostDetailsWithParams from './components/PostDetails' // Import PostDetailsWithParams
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetailsWithParams />} /> {/* Use PostDetailsWithParams here */}
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
