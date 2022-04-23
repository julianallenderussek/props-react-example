import React from 'react'
import BlogList from './BlogList';
import Navbar from './Navbar';
import "./Home.css"

const Home = (props) => {
    console.log("This is props on the Home component", props)
    return (
    // This tag is called a react fragment, is almosta  equivalent of having a wrapping div.
    <>  
        <Navbar/>
        <h1 className='home-title'>Welcome to the Props Blog</h1>
        <h1 className='home-subtitle'>Check out the hottest tips for mastering props</h1>
        <BlogList blogList={props.blogList} />
    </>

  )
}

export default Home;
