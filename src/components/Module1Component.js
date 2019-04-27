import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Collapse, Button, CardBody, Card  } from 'reactstrap';
import { Module } from 'module';


class Module1 extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      collapse :false
     
    
       
    }
    this.toggle = this.toggle.bind(this);  
  }
  


toggle() {
  this.setState(state => ({ collapse: !state.collapse }));
}

 
  render() {
    
  
     return(
      
        <div className="container">
        <Card>
          <CardBody>
        <Row>

        <Col><h3>Course Content</h3></Col>
      
        <Col><Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand all</Button></Col>
        
        <Col><h3>27 lectures</h3></Col>
        <Col><h3>01:32:56</h3></Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <ListGroup>
              <Row>
                <Col><h4>Mind and Focus</h4></Col>
                <Col><h4>7 lectures</h4></Col>
                <Col><h4>44:17</h4></Col>
              </Row>
            </ListGroup>
            <ListGroupItem>
              <Row>
             <Col><p><a href="https://www.youtube.com/watch?v=LfdJS_8M8bY">The Importance of Being Focused</a></p></Col>
             <Col><p><a href="https://www.youtube.com/watch?v=LfdJS_8M8bY">preview</a></p></Col>
             <Col><a>6:35</a></Col>
            </Row>
              
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p><a href="https://www.youtube.com/watch?v=77RubAueWjg">The Benefits of Being Focused</a></p></Col>
             <Col><p><a href="https://www.youtube.com/watch?v=77RubAueWjg">preview</a></p></Col>
             <Col><a>5:54</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p><a href="https://www.youtube.com/watch?v=AmTbx_8SMMw">How Setting Your Priorities Powers Your Focus</a></p></Col>
             <Col><p><a href="https://www.youtube.com/watch?v=AmTbx_8SMMw">preview</a></p></Col>
             <Col><a>18:55</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Techniques and Methods for Setting your Goals</p></Col>
             <Col></Col>
             <Col><a>03:55</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Focus in the Middle of the Day</p></Col>
             <Col></Col>
             <Col><a>03:45</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Preparing Yourself for Maximum Focus</p></Col>
             <Col></Col>
             <Col><a>03:45</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Focus Strategies-6 Hacks and Methods that Help you Focus</p></Col>
             <Col></Col>
             <Col><a>03:28</a></Col>
            </Row>
            </ListGroupItem>

            </CardBody>
          </Card>
          <br />
          
        

           <Card>
            <CardBody>
            <ListGroup>
              <Row>
                <Col><h4>Diet and Nutrition for Focus</h4></Col>
                <Col><h4>6 lectures</h4></Col>
                <Col><h4>20:40</h4></Col>
              </Row>
            </ListGroup>
           
            <ListGroupItem>
            <Row>
             <Col><p>Diet - What foods to Eat and what Foods to Avoid</p></Col>
             <Col></Col>
             <Col><a>05:04</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Foods to Avoid</p></Col>
             <Col></Col>
             <Col><a>01:28</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>What to Drink</p></Col>
             <Col></Col>
             <Col><a>02:58</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>7 Herbs-Roots-Teas for Increased Focus</p></Col>
             <Col></Col>
             <Col><a>03:45</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>How Water can Help you Improve your Focus</p></Col>
             <Col></Col>
             <Col><a>03:30</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Vegetables from the Sea to Help you Focus</p></Col>
             <Col></Col>
             <Col><a>03:55</a></Col>
            </Row>
            </ListGroupItem>
            
            

            </CardBody>
          </Card>
          <br />
          <Card>
            <CardBody>
            <ListGroup>
              <Row>
                <Col><h4>Tips and Tools for Focus</h4></Col>
                <Col><h4>5 lectures</h4></Col>
                <Col><h4>18:23</h4></Col>
              </Row>
            </ListGroup>
           
            <ListGroupItem>
            <Row>
             <Col><p>Focus Checklists to get you Started</p></Col>
             <Col></Col>
             <Col><a>04:03</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Focus Tools and Apps to Consider</p></Col>
             <Col></Col>
             <Col><a>03:19</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Acupuncture for Productivity and Focus</p></Col>
             <Col></Col>
             <Col><a>03:13</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Try Specific Yoga Poses that Work on Focus and Concentration</p></Col>
             <Col></Col>
             <Col><a>03:34</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Qi Gong is Wonderful for your Focus</p></Col>
             <Col></Col>
             <Col><a>04:14</a></Col>
            </Row>
            </ListGroupItem>
            </CardBody>
          </Card>
          <br />

          <Card>
            <CardBody>
            <ListGroup>
              <Row>
                <Col><h4>21 Days Focus Challenge</h4></Col>
                <Col><h4>8 lectures</h4></Col>
                <Col><h4>24:34</h4></Col>
              </Row>
            </ListGroup>
           
            <ListGroupItem>
            <Row>
             <Col><p>21 Day Focus Challenge Introduction</p></Col>
             <Col></Col>
             <Col><a>01:33</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 1 to 3</p></Col>
             <Col></Col>
             <Col><a>02:58</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 4 to 6</p></Col>
             <Col></Col>
             <Col><a>03:43</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 7 to 9</p></Col>
             <Col></Col>
             <Col><a>03:18</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 10 to 12</p></Col>
             <Col></Col>
             <Col><a>03:09</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 13 to 15</p></Col>
             <Col></Col>
             <Col><a>02:56</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 16 to 18</p></Col>
             <Col></Col>
             <Col><a>03:38</a></Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
             <Col><p>Day 19 to 21</p></Col>
             <Col></Col>
             <Col><a>03:39</a></Col>
            </Row>
            </ListGroupItem>
            </CardBody>
          </Card>

          </Collapse>
        
        </CardBody>
        </Card>
        
        <br />
        
        </div>
          
        
    
    );
  }
}

export default Module1;  