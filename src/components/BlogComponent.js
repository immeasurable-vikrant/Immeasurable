// import React from 'react';
// import { Card,CardBody,CardImg,CardTitle, CardText,Button} from 'reactstrap';
// import { ARTICLES } from '../shared/articles';
// import {BLOGS} from '../shared/blogs';

// function Blogs(props) {

   

// const blogList = props.medium.map((medium) => {
    
//     return (
//     <div  key = {medium.id} className="col-md-10 gf">
//         <h1 className="text-center">{medium.head}</h1>
//             <i><big className="text-muted text-center gk">{medium.head} and {medium.head} plus {medium.head} </big></i>
//             <img className="col-12 col-md-10" src ={medium.imag} alt = {medium.capt} />
//                 <p className="col-12 col-md-10">{medium.capt}</p>
//                 <button className="center">More Blogs</button>     
                       
//     </div>
//   );
// })
// return(
// <div className="container">
//     <div className="row offset-1 center">
      
//         {blogList}
       
//     </div>
// </div>
// );
// }

// export default Blogs;



import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Blog extends Component {

    renderMedium(mediums) {
        if (mediums == null) {
            return (<div>
                
            </div>)
        }
        const blogList = mediums.map(medium => {
            return (
                <li key={medium.id}>
                    <p>{medium.head}</p>
                    <p>-- {medium.capt}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Blogs </h4>
                <ul className='list-unstyled'>
                    {blogList}
                </ul>

            </div>
        )
    }

    renderArticle(article) {
        if (article != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={article.image} alt={article.name} />
                        <CardBody>
                            <CardTitle>{article.name}</CardTitle>
                            <CardText>{article.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        const article = this.props.article
        if (article == null) {
            return (<div></div>)
        }
        const articleItem = this.renderArticle(article)
        const mediumItem = this.renderMedium(article.mediums)
        return (
            <div className='row'>
                {articleItem}
                {mediumItem}
            </div>
        )
    }
}

export default Blog;


