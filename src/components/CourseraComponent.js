import React from 'react';
import NavBar from './NavBarComponent';
import { ListGroup, ListGroupItem , Col, Button,Row, Collapse,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';


export default class Coursera extends React.Component {

 
  constructor(props) {
    super(props);
  
    this.state = {
      collapse :false,
     
    }

    this.toggle = this.toggle.bind(this); 

  }
  


toggle() {
  this.setState(state => ({ collapse: !state.collapse}));
}


  render() {


    {  
      const list = this.props.videolinks.map((videolink) => {
        return( 
  
          <div key ={videolink.id } className="col-12 col-md-3 vb">
          <ListGroup >
          <ListGroupItem  onClick={this.toggle} ><b>{videolink.title}</b></ListGroupItem>
            <Collapse isOpen={this.state.collapse}>
               <Link active to={videolink.video}><ListGroupItem><b className="text-muted">{videolink.caption}</b></ListGroupItem></Link> 
            </Collapse>
          </ListGroup>
          </div>
      
          
        );
      })

    return (
      <div>
      <NavBar />
     

      <div className="container">
      
        <div className="row">
          <div className="col-12 col-md-3 vb">
          {list}
         {this.toggle()}
        </div>


          <div className="row-player">
          <div className="col-12 col-md-9">
          <ReactPlayer url='https://www.youtube.com/watch?v=n7XIvEzP990' playing 
          width ="720px" height="576px"/>
     
          </div>
          </div>
      

                </div>
              </div>
            </div>
        );
    }
  } 
}
