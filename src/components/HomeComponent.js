import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <div className="conatiner">
       <div className="row">
          <div className="col-6 ">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137137.jpg"/>
      </Card>
          </div>

       <div className="col-3">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137244.jpg"/>
      </Card>
          </div>

          <div className="col-3">
      <Card>
      <CardImg top width="100%" src="https://wallpapercave.com/wp/wc3137263.jpg"/>
      </Card>
          </div>

          <div className="col-3">
      <Card>
      <CardImg top width="100%" src="https://www.pixelstalk.net/wp-content/uploads/wallpapers/Messi-vs-El-Clasico-2017-Wallpaper-1-620x349.jpg"/>
      </Card>
          </div>

          <div className="col-3">
      <Card>
      <CardImg top width="100%" src="https://www.pixelstalk.net/wp-content/uploads/wallpapers/Messi-vs-El-Clasico-2017-Wallpaper-4-620x465.jpg"/>
      </Card>
          </div>
        </div>


        <div className="row">
        <div className="col-4">
        
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

        <div className="col-4">
        
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
    
    
     
 
 
  );
};

export default Home;
