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
      // selectedReading: null
     
     
    }

    this.toggle = this.toggle.bind(this); 
    this.onSelectedVideo= this.onSelectedVideo.bind(this);
    // this.onSelectedReading= this.onSelectedReading.bind(this);
  
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

// onSelectedReading(currentVideos) {
//   this.setState({
//     selectedReading: currentVideos.reading1
//   })
// }


render() {
  
    const listgroup = this.props.videolinks.map((videolink) => {
      return( 

        <div >
        <ListGroup key ={videolink.name} className="pointer">
        <ListGroupItem><b className="text-muted"><i>{videolink.reading}</i></b></ListGroupItem>
          <ListGroupItem  onClick={this.toggle} className="list-group"><b>{videolink.caption}</b></ListGroupItem>
    
            <Collapse isOpen={this.state.collapse}>
            {videolink.videos.map((select) => {
                return (   
                  <ReactPlayerVideo onSelectedVideo={this.onSelectedVideo} select={select} />

                  );

              })}
              {/* {videolink.reading1.map((select) => {
                return (   
                  <div className="">
                  <ReactPlayerVideo onSelectedReading={this.onSelectedReading} select={select} />
                  </div>
                  
                  );

              })}
              */}
            </Collapse>
        </ListGroup>
        </div>
    
        
      );
    });
    
    
return (

    <div>
      <NavBar />
      <div className="container">
      
      <h1 className="text-center mt-4">"Unwavering Attention"</h1>
      <div className="row ml-6">
         
          </div>
        <div className="row">
          <div className="col-12 col-md-3 coursera">
            {listgroup}
          </div>
        <div className="row-player">
            <div className="col-12 col-md-8">
            <ReactPlayer url={this.state.selectedVideo} playing 
              controls
              width ="720px" height="576px"/>
            </div>
            {/* <div className="col-12 col-md-8">
            (<PDFViewer document={this.state.selectedReading } />);
            </div> */}
        </div>
        </div>
      </div>
    </div>
    );
 
    } 
}
