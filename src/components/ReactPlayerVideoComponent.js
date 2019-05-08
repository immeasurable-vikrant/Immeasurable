import React, { Component } from 'react';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';

class ReactPlayerVideo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <ListGroup  key={this.props.select.name}>
            <ListGroupItem onClick={()=>{ this.props.onSelectedVideo(this.props.select)
                }}><b className="text-muted">{this.props.select.name}</b>
            </ListGroupItem>
        </ListGroup>
        
        );
    }
}
export default ReactPlayerVideo;