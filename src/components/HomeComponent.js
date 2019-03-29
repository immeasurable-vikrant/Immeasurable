import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function Home(props) {

    return(
        <div className="row">
        <div className="row">
        <div className="col-12 col-md-4">
       
        <Card className="float-right"> 
          <CardImg top width="10%" src="https://images.unsplash.com/photo-1530847887473-36dbaf586122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
        <Card className="float-right">
          <CardImg top width="10%" src="https://gmsrp.cachefly.net/images/19/03/27/55976fbf08edf31763a95bd6246f3150/960.jpg" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
     
        <Card>
          <CardImg top width="10%" src="https://usatftw.files.wordpress.com/2019/03/afp-afp_1er3c8.jpg?w=1000&h=600&crop=1"/>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card> 
        </div>
        </div>
      </div>
       
    );
}
    
        
export default Home; 


