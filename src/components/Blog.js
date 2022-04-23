import React from 'react'
import './Blog.css'

// Here insted of calling props which is props = { bloq: {...title, ...author, etc}} we can use object distructuring
// to take out the bloq object..
const Blog = ({blog}) => {
    console.log("This is blog in Blog", blog)
    return (
    <div className='blog-wrapper'>
        <h1 className='blog-title'>{blog.title}</h1>
        <p className='blog-body'>{blog.body}</p>
        <img className='blog-image' src={`${blog.image}`} ></img>
        <h2 className='blog-author'>Written by:{blog.author}</h2>
    </div>
  )
}

export default Blog