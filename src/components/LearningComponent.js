import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle,CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

export default class Learning extends React.Component {


    toggle(tab) {
        if (this.props.activeTab !== tab ) {
            this.setState({
              activeTab: tab
            });
        }
    }

    render(){
        return(
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink 
                        className = {classnames({active:this.props.activeTab=== '2'})}
                        onClick={()=> {this.toggle('2'); }}
                        > The Learning
                        </NavLink>
                    </NavItem>
                </Nav>
            
            <TabContent activeTab={this.props.activeTab}>
                <TabPane tabId="1">
                    <div className="container">
                    <Row>
                        <Col sm="12">
                        <h3>There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.</h3>
                         <p>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</p>
                        </Col>
                    </Row>
                    </div>
                </TabPane>

                <TabPane tabId="2">
                    <Row>
                        <Col sm ="6">
                        <Card body>
                            <CardTitle>Special Treatment of Chahcha</CardTitle>
                            <CardText>with supporting text below as Chacha </CardText>
                            <Button> GO SOmewhere</Button>
                        </Card>
                        </Col>
                       < Col sm ="6">
                        <Card body>
                            <CardTitle>Special Treatment of Chahcha</CardTitle>
                            <CardText>with supporting text below as Chacha </CardText>
                            <Button> GO SOmewhere</Button>
                        </Card>
                        </ Col>
                    </Row>
                </TabPane>
            </TabContent>
            </div>
        );
    }
}