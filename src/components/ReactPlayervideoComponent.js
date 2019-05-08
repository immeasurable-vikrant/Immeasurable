import React, { Component } from 'react';
import {Card,CardImg,CardBody,CardTitle,Button} from 'reactstrap'


class ReactPlayervideo extends Component {

    renderVideos(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <div key={comment.id} className='col-12 col-md-8 '>
                
        <Card>
        <CardImg top width="100%" src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/1130139805.jpeg&c=sc&w=850&h=560" alt= {comment.caption} />
        <CardBody>
          <CardTitle>{comment.caption}</CardTitle>
          
          <Button>See More</Button>
        </CardBody>
      </Card>
      </div>
            //     <div className="col-12 col-md-8">
              
            //     <ReactPlayer url="https://www.youtube.com/watch?v=uirRaVjRsf4&pbjreload=10" playing 
            //     controls
            //     width ="720px" height="576px"/>
            //   </div>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
            
                    {cmnts}
            

            </div>
        )
    }

    render() {
        const comment = this.props.comment
        if (comment == null) {
            return (<div></div>)
        }
        const dishItem = this.renderVideos(comment)
       
        return (
            <div className='row'>
                {dishItem}
                
            </div>
        )
    }
}

export default ReactPlayervideo;


