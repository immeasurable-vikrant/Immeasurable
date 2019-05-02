import React from 'react';
import { ListGroup, ListGroupItem , Col, Button,Row, Card, Collapse,CardBody} from 'reactstrap';


class Coursera extends React.Component {

 
  constructor(props) {
    super(props);
  
    this.state = {
      collapse :false
     
    
       
    }
    this.toggle = this.toggle.bind(this);  
  }
  


toggle() {
  this.setState(state => ({ collapse: !state.collapse }));
}


  render() {
    return (
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
          <ListGroup >
          <ListGroupItem  onClick={this.toggle} >Week 1</ListGroupItem>
             <Collapse isOpen={this.state.collapse}>
                <ListGroupItem> Hello Week 1</ListGroupItem>
                <ListGroupItem>Week 1 contd</ListGroupItem>
                <ListGroupItem>Week 1 end</ListGroupItem>
            </Collapse>
            </ListGroup>
            
            <ListGroup >
            <ListGroupItem onClick={this.toggle} >Week 2</ListGroupItem>
             <Collapse isOpen={this.state.collapse}>
                <ListGroupItem> Hello Week 2</ListGroupItem>
                <ListGroupItem>Week 2 contd.</ListGroupItem>
                <ListGroupItem>Week 2 end </ListGroupItem>
            </Collapse>
            </ListGroup>

            <ListGroup >
            <ListGroupItem onClick={this.toggle} >Week 3</ListGroupItem>
             <Collapse isOpen={this.state.collapse}>
                <ListGroupItem >React components</ListGroupItem>
                <ListGroupItem>React State</ListGroupItem>
                <ListGroupItem>Props : Passing the data</ListGroupItem>
            </Collapse>
            </ListGroup>

            <ListGroup >
            <ListGroupItem onClick={this.toggle} >Week 4</ListGroupItem>
             <Collapse isOpen={this.state.collapse}>
                <ListGroupItem  >React Router</ListGroupItem>
                <ListGroupItem>reactFragments</ListGroupItem>
                <ListGroupItem>Redux Thunk</ListGroupItem>
            </Collapse>
          </ListGroup>
          </div>
          <div className="col-12 col-md-9">
          <iframe width="640" height="480" 
          src="https://www.youtube.com/embed/KkvTqnGwK1o"
           frameborder="0" 
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
          </div>
        </div>
      </div>
     
    );
  }
}
export default Coursera;