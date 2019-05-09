
import React  from 'react';
import { Button, ListGroup, ListGroupItem,  Row, Col, Jumbotron, CardImg,CardBody,CardText,CardTitle,CardImgOverlay } from 'reactstrap';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import Module1 from './Module1Component';



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

                <Jumbotron className="jumbo-1">
          <div className="container">
            <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h3>How to Improve Focus and Concentration: Learn to Focus Better</h3>
                  <h4> Focus & Concentration Strategies for personal Productivity : Brain Hacking Tips & A 21 Day Focus Success Challenge </h4>
                  <p>4.6 (46 ratings) 100 Students enrolled <br /> English</p>
              </div>

              <div className=" col-12 col-md-4">
                    <div>
                    {/* className="box text-center" */}
                    <Card  > 
                    {/* className=" box text-card"  */}
              <CardImg src="https://quicksilver.scoopwhoop.com/unsafe/960x0/center/https://s4.scoopwhoop.com/anj/arjun/168969273.jpg" alt="Preview Video" />
              <CardImgOverlay>
              <div className="box-content">
		                <img className="image-module" height="80px" width="80px" src="http://cdn.onlinewebfonts.com/svg/img_272152.png" alt="defaultimage"></img> 
		              </div>  
                </CardImgOverlay>
                  <CardBody>   
                    <CardTitle ><b className="text-300">Unwavering Attention</b></CardTitle>    
                     <CardText><b className="text-300">₹300</b>&nbsp;&nbsp;&nbsp;&nbsp;<strike>₹700</strike> 40% off</CardText>
                     <Button color="primary"> Add to Cart</Button> <br/>
                     <Button color="danger"> Buy Now</Button>
                     
                     <ul className="text-300">This course includes</ul>
                     <li className="text-300">
                     <i class="fa fa-play" aria-hidden="true"></i><ul>24 hours on-demand video</ul>
                     <i class="fa fa-newspaper-o" aria-hidden="true"></i><ul>19 articles</ul>
                     <i className="fa fa-phone fa-sm"></i><ul>Full lifetime access</ul>
                     <i class="fa fa-mobile" aria-hidden="true"></i><ul>Access on mobile and TV</ul>
                     </li>
                  </CardBody>
            
           </Card> 
                      </div>
                    </div>
            </div>
          </div>

          </Jumbotron>


      <div className="container">
        <div className="row">
        
<br />
                <div className="container">
                  <div className="col-12 col-sm-4 ">
                    <Card>
                     <CardActionArea>
                
                      <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Course Description
                  </Typography>
                  <Typography component="p">
                  This course includes 1.5 hours on-demand video, Full lifetime access, 
                  Access on mobile and TV, Daily Practices Scheduled.
                   </Typography>
                    </CardContent>
                  </CardActionArea>
                 <CardActions>
                 <Button size="small" color="primary" >
                      Buy Now
                    </Button>
                  <Button size="small" color="primary">
                   Add to cart
                   </Button>
                  </CardActions>
                  </Card>
                  </div>
                  </div>
        <div className="col-12">
           
          {modules}
          </div>
        </div>
        <div className="row">
          <Module1 />
        </div>

      </div>
      </div>
    );
  }
  
 

export default Module2b;