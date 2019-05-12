import React, { Component } from 'react';
import { ListGroup, ListGroupItem ,Collapse} from 'reactstrap';

class Reading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <ListGroup  key={this.props.select.reading1}>
            <ListGroupItem onClick={()=>{ this.props.onSelectedReading(this.props.select)}}>
            <b className="text-muted">{this.props.select.reading1}</b>
            </ListGroupItem>
        </ListGroup>
        
        );
    }
}
export default Reading;