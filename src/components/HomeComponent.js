import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <div className="conatiner">
       <div className="row">
          <div className="col-6">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137137.jpg"/>
      </Card>
          </div>

      <div className="col-6">
      <div className="row">
       <div className="col-6">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137244.jpg"/>
      </Card>
          </div>

          <div className="col-6">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wc3137263.jpg"/>
      </Card>
          </div>
          </div>

        <div className="row">
          <div className="col-6">
      <Card>
      <CardImg top width="100%" src="https://images5.alphacoders.com/521/521476.jpg"/>
      </Card>
          </div>

          <div className="col-6">
      <Card>
      <CardImg top width="100%" src="https://e00-marca.uecdn.es/imagenes/2015/01/22/en/football/barcelona/1421932390_extras_noticia_foton_7_0.jpg"/>
      </Card>
          </div>
        </div>
        </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h4>Unlimited Access</h4>
            <p>Choose what you'd like to learn from 
            our extensive subscription Library.</p>
            </div>
      
        <div className="col-4">
            <h4>Expert Masters</h4>
            <p>Learn from industry experts who are 
              passionate about Teaching.
            </p>
          </div>

          <div className="col-4">
            <h4>Learn Anywhere</h4>
            <p>Switch between your copmputer, tablet or mobile device.</p>
          </div>
          <Button color="warning" >Subscribe now</Button>
          </div>
       
        


        <div className="row">
        <div className="col-6 col-md-6">
        
        <Card>
        <CardImg top width="100%" src="https://images7.alphacoders.com/770/thumb-350-770680.jpg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="warning">Preview</Button>
        </CardBody>
      </Card>
      </div>
        </div>
        <div className="row">
        <div className="col-6 col-md-6">
        
        <Card>
        <CardImg top width="100%" src="https://images2.alphacoders.com/144/thumb-1920-144270.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="warning">Preview</Button>
        </CardBody>
      </Card>
      </div>
        </div>
    </div>   
    
    
     
 
 
  );
};

export default Home;
