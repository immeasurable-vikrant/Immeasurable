import React from 'react';
import { ListGroup, ListGroupItem , Col, Button,Row, Navbar, NavItem,NavLink} from 'reactstrap';


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
      <div className="ro">
      <Navbar color="primary">
     </Navbar>
      </div>
    
        <ListGroup className="col-12 col-md-3 ">
      <ListGroupItem onClick={this.toggle} >Cras justo odio</ListGroupItem>
      <Row className="col-12 col-md-3"><Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand all</Button></Row>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}
export default Coursera;