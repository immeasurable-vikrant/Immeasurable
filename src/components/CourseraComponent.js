import React , { Component } from 'react';
import { Card, CardBody, CardImg, CardText} from 'reactstrap';


class Coursera extends Component {

  
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-col">
                    <Card>
                        <CardImg src="https://www.ancient-origins.net/sites/default/files/field/image/Remains-of-Buddha-Found.jpg" />
                        <CardBody>
                            <CardText>
                                Hello Brother
                            </CardText>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            
            </div>
        );

    }

}


export default Coursera;