import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
  
    render() {
        return(
            <div className="container" >
            <div className="row">
            <div className="col-12 col-md-6 offset-1">
              <Button color="success">Logout</Button>
            </div>
            </div>
            </div>
        );
    }

}
export default Logout;  