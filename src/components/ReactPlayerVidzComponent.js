import React, { Component } from 'react';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';

class ReactPlayerVidz extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <ListGroup  key={this.props.select.name}>
            <ListGroupItem onClick={()=>{ this.props.onSelectedVideo(this.props.select)
                }}>{this.props.select.name}
            </ListGroupItem>
        </ListGroup>
        
        );
    }
}
export default ReactPlayerVidz;