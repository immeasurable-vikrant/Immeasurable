import React from 'react';
import NavBar from './NavBarComponent';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { VIDEOLINKS } from '../shared/videolinks';


export default class Coursera extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      collapse :false,
     videolinks: VIDEOLINKS,
      currentVideo: null,
     
    }

    this.toggle = this.toggle.bind(this); 

  }
  


toggle() {
  this.setState(state => ({ collapse: !state.collapse}));
}

onSelectedVideo(videolinks) {
  this.setState({
    currentVideo: videolinks
})
}

  render() {
    
      const list = this.props.videolinks.map((videolink) => {
        return( 
  
          <div key ={videolink.id} >
          <ListGroup >
            <ListGroupItem  onClick={this.toggle} ><b>{videolink.title}</b></ListGroupItem>
              <Collapse isOpen={this.state.collapse}>
              {/* loop */}
                {/* <Link active to={videolink.links[0].video} onClick={()=>{
                  this.setState(
                    currentVideo: loop.video
                  )
                }}> </Link> */}
                <a href="#" onClick={() => this.onSelectedVideo()}> <ListGroupItem><b className="text-muted">{videolink.caption}</b></ListGroupItem>   </a>
                <Link  to="/{videolink.video}"> <ListGroupItem><b className="text-muted">{videolink.caption}</b></ListGroupItem>   </Link>
                <Link  to="/{videolink.video}"> <ListGroupItem><b className="text-muted">{videolink.caption}</b></ListGroupItem>   </Link>  
              </Collapse>
          </ListGroup>
          </div>
      
          
        );
      });

  return (
      <div>
        <NavBar />
        <div className="container">
        
          <div className="row">
            <div className="col-12 col-md-3 coursera">
              {list}
            </div>
            <div className="row-player">
              <div className="col-12 col-md-8">
                <ReactPlayer url={this.state.currentVideo} playing
                 controls light
                width ="720px" height="576px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    } 
}
