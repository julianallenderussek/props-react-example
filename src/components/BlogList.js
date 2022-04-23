import React from 'react'
import { blogList } from '../blogs'
import Blog from './Blog'
import './BlogList.css'

const BlogList = (props) => {

    // Try checking it out on the console
    console.log("Props inside BloqList", props)
    return (
    <div className='bloq-main-div'>
        {
          props.blogList.map((bloq, index) => {
            return <Blog blog={bloq} key={`bloq-key-${index}`} />
          })
        }
    </div>
  )
}

export default BlogList