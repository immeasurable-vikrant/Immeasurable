import React from  'react';
import {Card, CardImg,Button,CardBody,CardTitle,CardText } from 'reactstrap';


function Wisdom(props) {
    
    const articleList = props.articles.map((article) => {
          return (
          <div key={article.id} className="col-12 col-md-4 col-article" >
            <Card onClick={() => {}}>
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
        <div className="container">
            <div className="row">
              
                {articleList}
            
            </div>
     </div>
    );




}

export default Wisdom;