
import React  from 'react';
import { ListGroup, ListGroupItem,  Row, Col } from 'reactstrap';
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
      <div className="container">
        <div className="row">
        <div className="col-12">
           
          {modules}
          </div>
        </div>
        <div className="row">
          <Module1 />
        </div>

      </div>
    );
  }
  
 

export default Modules;