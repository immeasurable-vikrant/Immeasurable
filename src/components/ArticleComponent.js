import React, { Component } from 'react';


class Article extends Component {

    renderBlogs(blogs) {
        if (blogs != null) {
            return (
                <div className='col-12 col-md-10 m-1'>
                <h1 className="text-center"> {blogs.name}</h1>
                <i><h5 className="text-muted text-center">{blogs.subtext}</h5></i>
              
                <img className ="col-12 col-md-8 " src={blogs.image} alt={blogs.name} />
                  <p className="col-12 col-md-6 text-justify"><b>Speaker</b>: {blogs.description}</p>
                  <h3 className="text-muted"><i><b>{blogs.quote}</b></i></h3>
                <p><b>Editor's Note : Read more articles, Get weekly updates on the newest articles, quotes and newsletters right in your mailbox. Subscribe now</b></p>
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
