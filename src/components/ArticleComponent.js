import React, { Component } from 'react';


class Article extends Component {

    renderBlogs(blogs) {
        if (blogs != null) {
            return (
                <div className='col-12 col-md-10 m-1'>
              
                <img src={blogs.image} alt={blogs.name} />
                <h2>{blogs.name}</h2>
                  <p>{blogs.description}</p>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
    
    render() {
        const blogs = this.props.blogs
        if (blogs == null) {
            return (<div></div>)
        }
        const blogItem = this.renderBlogs(blogs)
       
        return (
            <div className='row'>
                {blogItem}
            
                
            </div>
            
             
        )
    }
}

export default Article;


