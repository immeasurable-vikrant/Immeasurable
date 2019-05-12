
import React  from 'react';
import { Button, ListGroup, ListGroupItem,  Row, Col, Jumbotron, CardImg, CardBody, CardText, CardTitle, CardImgOverlay} from 'reactstrap';
import Card from '@material-ui/core/Card'

import Module2 from './Module2Component';



  function RenderModulesItem({data}){
    return(
  
      <div className="container">
          <br />
        <ListGroup>
          
          <ListGroupItem> 
          
             <h3>{data.name}</h3>
            <Row>
              <Col>
              <p>{data.category}</p>
              <p>{data.label}</p>
              </Col>
              <Col>
              <p>{data.price}</p>
              <p>{data.description}</p>
             </Col>
            </Row>
            
          
          </ListGroupItem>
        </ListGroup>
       <br />
       </div>   
    );
  }
  function Comments(data){
    return(
      <div className="row">
      
        <h3>{data.name}</h3>
        <p>{data.category}</p>
      </div>
    )

  }
  
  
     
  
 
   const Module2b = (props) => {
    const modules = props.datas.map((data) => {
      return (
        
          
        <div key={data.id} className="col-12 col-md-10">
        
        
        <RenderModulesItem data={data} />
        <Comments data={data} />
       
        
        
        </div>
        

       
      );
    });
   

	  return(
<div className="jumbo">

        <Jumbotron className="goku">
          <div className="container">
            <div className="row row-header">
            <div className="col-12 col-md-8">
                <h3>How to Conquer the Mind ?</h3>
                  <h4> Gain control over your mind. Make better choices. Be more disciplined. Become independent of other peoples' opinions.</h4>
                  <p>4.6 (46 ratings) 100 Students enrolled <br /> English</p>
              </div>

        <div className=" col-12 col-md-4">
          <div className="cardib">
            <Card> 
              <CardImg src="assets/images/conqueringthemind.jpg" alt="Preview Video" />
              
              <CardImgOverlay>
              <div className="box-content">
		              <img className="image-module" height="80px" width="80px" src="http://cdn.onlinewebfonts.com/svg/img_272152.png" alt="defaultimage"></img> 
		              </div>  
                </CardImgOverlay>
                  <CardBody>   
                    <CardTitle ><b className="text-300">Conquering the Mind</b></CardTitle>    
                     <CardText className="text-300"><b className="text-300">₹500</b> &nbsp;&nbsp; <strike >₹1000</strike> 50% off</CardText>
                     <Button color="danger" size="lg" block>Start My Free Trial</Button>
                     <Button  outline color="secondary" size="lg" block>Buy Now</Button>

                      <ul className="text-300">
                     <li><b>This Course Includes :</b></li>
                     <li>24 hours on-demand video</li>
                     <li>19 articles</li>
                     <li>Full lifetime access</li>
                     <li>Access on mobile and TV</li>
                     </ul>
                  </CardBody>
            
           </Card> 
            </div>
            </div>
            </div>
          </div>

          </Jumbotron>


      <div className="container o">
        <div className="row">
        <div className="col-12 col-md-5">
        <Card className="mb-4">
          <CardTitle className="text-center"><b>Conquering the Mind</b></CardTitle>
          <CardText> “The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..” </CardText>
          <Button  outline color="secondary" size="lg" block>Buy Now</Button>
        </Card>
       
    
      </div>
        
          <br />
          <div className="container">
                
                  </div>
        <div className="col-12">
           
          {modules}
          </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-10">
          <Module2 />
          
          </div>
        </div>

      </div>
      </div>
    );
  }
  
 

export default Module2b;