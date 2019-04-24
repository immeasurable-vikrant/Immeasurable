import React from  'react';
import {Card, CardImg,Button,CardBody,CardTitle,CardText,Jumbotron } from 'reactstrap';
import Blogs from './BlogComponent';


function Wisdom(props) {
    
    const articleList = props.articles.map((article) => {
          return (
          <div key={article.id} className="col-12 col-md-4 col-article" >
            <Card >
             <CardImg top width="100%" src={article.image} alt={article.name} />
                 <CardBody>
                    <CardTitle>{article.name}</CardTitle>
                         
                            <CardText>{article.description}</CardText>
                                <Button>Learn More</Button>
                 </CardBody>
            </Card>
          
          </div>
        );
     })

     
    return(
       
        <div className="conatiner">
        <Jumbotron className="jumbotron-wisdom"    >
                     <div className="container">    
                         <div className="row row-header">
                             <div className="col-12 col-sm-10">
                            <h1>Immeasurable</h1>
                             <p><h3>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</h3></p>
                                 <Button className="btn-sub">Subscribe Now</Button>
                             </div>
                         </div>
                         </div>
                     </Jumbotron>
            <div className="row">
           
              
                {articleList}
            
            </div>
     </div>
    );
}

export default Wisdom;