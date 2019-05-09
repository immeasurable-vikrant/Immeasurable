import React from 'react';
import NavBar from './NavBarComponent';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';
import ReactPlayer from 'react-player';
import ReactPlayerVideo from './ReactPlayerVideoComponent';



export default class Coursera extends React.Component {


 
  constructor(props) {
    super(props);
    this.state = {
      collapse :false,
      selectedVideo: null,
    //   currentVideos: [
    //     {
    //     id: 0,
    //     caption: "Part 1",
    //     video: "https://www.youtube.com/watch?v=R7cUvp3XnYs"
    //     },
       
    // ]
     
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
  
    const listgroup = this.props.videolinks.map((videolink) => {
      return( 

        <div >
        <ListGroup key ={videolink.name} className="pointer">
        <ListGroupItem color="success" tag="a" href="#">{videolink.reading}</ListGroupItem>
          <ListGroupItem  onClick={this.toggle} ><b>{videolink.name}</b></ListGroupItem>
          
            <Collapse isOpen={this.state.collapse}>
            {videolink.videos.map((select) => {
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
