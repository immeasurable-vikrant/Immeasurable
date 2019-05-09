import React from 'react';
import NavBar from './NavBarComponent';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';
import ReactPlayer from 'react-player';
import ReactPlayerVideo from './ReactPlayerVideoComponent';



export default class Coursera1 extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      collapse :false,
      selectedVideo: null,
     
    }

    this.toggle = this.toggle.bind(this); 
    this.onSelectedVideo= this.onSelectedVideo.bind(this);
  }
  


toggle() {
  this.setState(state => ({ collapse: !state.collapse}));
}

onSelectedVideo(currentVideos) {
  console.log("fvghnjmk,.");
  // debugger;
  this.setState({
      selectedVideo: currentVideos.video
  })
}

render() {
  
    const listgroup = this.props.videolinks1.map((videolink1) => {
      return( 

        <div >
        <ListGroup key ={videolink1.name}>
          <ListGroupItem  onClick={this.toggle} ><b>{videolink1.name}</b></ListGroupItem>
          
            <Collapse isOpen={this.state.collapse}>
            {videolink1.videos.map((select) => {
                return (
                  <ReactPlayerVideo onSelectedVideo={this.onSelectedVideo} select={select} />
                );

              })}
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
            {listgroup}
          </div>
          <div className="row-player">
            <div className="col-12 col-md-8">
            {/* <ReactPlayer currentVideos={this.state.onSelectedVideo} playing 
              controls
              width ="720px" height="576px"/> */}

              <ReactPlayer url={this.state.selectedVideo} playing 
              controls
              width ="720px" height="576px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
 
    } 
}
