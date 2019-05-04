import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  
    render() {
        return(
            <div className="container" >
            <div className="row">
            <div className="col-12 col-md-6 offset-1">
                <Card>
                    <CardTitle>
                        SignIn/ SignUp
                    </CardTitle>
                    <CardBody>  
                    <CardText><b>Create your Account with Social Networks</b></CardText>
                    <Link  to= '/auth/google'> <Button color="danger"> Continue with Google+</Button> </Link>
                    </CardBody>

                </Card>
           
            </div>
            </div>
            </div>
        );
    }

}
export default Login;  