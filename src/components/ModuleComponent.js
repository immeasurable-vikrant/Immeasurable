
import React  from 'react';
import { ListGroup, ListGroupItem,  Row, Col, Jumbotron } from 'reactstrap';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
  
  
     
  
 
   const Modules = (props) => {
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

      <Jumbotron >

<div className="container">
  <div className="row row-header">
    <div className="col-12 col-sm-6">
      <h3>How to Improve Focus and Concentration: Learn to Focus Better</h3>
        <h4> Focus & Concentration Strategies for personal Productivity : Brain Hacking Tips & A 21 Day Focus Success Challenge </h4>
        <p>5.6 (46 ratings) 100 Students enrolled <br /> Created by David Mills, Michael Vallejo,  LCSW Last Updated 11/2019 <br /> English</p>
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
                  Access on mobile and TV, Certificate of Completion.
                   </Typography>
                    </CardContent>
                  </CardActionArea>
                 <CardActions>
                 <Button size="small" color="primary">
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
  
 

export default Modules;