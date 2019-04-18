import React , { Component } from 'react';
import { Card, CardImg, CardText,CardImgOverlay} from 'reactstrap';

class Coursera extends Component {


  

render() {

    const courser = this.props.card1.map((card) => {
        return(     
  
          <div key ={card.id } className="col-12 col-md-4  ">
          <div className="box text-center">
    
             <Card onClick="/learning">
                 <CardImg src={card.image} alt={card.name}/>
                 
                  <CardImgOverlay>
                      
                      <CardText>{card.name}</CardText>
                         
                      </CardImgOverlay>
             </Card> 
        
             </div>   
  
  
          </div>
      
          
        );
      })
      return(
          <div className="container">
        
    
                 <div className=" col-12 col-md-12">
                   <div className="row">
                    {courser} 
                  
                   </div>
                 </div>
              </div>  
              
              
                
      
         
        );
        
      
    }
}

   
  export default Coursera;