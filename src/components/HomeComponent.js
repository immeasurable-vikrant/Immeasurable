import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tools : [
        {
          id: 0,
          name:'Conquering the Mind',
          image: 'assets/images/conqueringthemind.jpg',
         },
       {
          id: 1,
          name:'Unwavering Focus and Concentration',
          image: 'assets/images/unwaveringfocusandconcentration.jpg',
        },
        {
          id: 2,
          name:'End of Addictions',
          image: 'assets/images/endofaddictions.jpg',
         },
         {
          id: 3,
          name:'The Science of Getting Rich',
          image: 'assets/images/thescienceofgettingrich.jpg',
         }
      ]
    }
  }

  render() {

    const home = this.state.tools.map((tool) => {
      return(

        <div key ={tool.id } className="col-md-6 ">
           <Card>
               <CardImg src={tool.image} alt={tool.name}/>
                <CardText>{tool.name}</CardText>
           </Card>          
        </div>

        
      );
    })

    return(
      <div className="conatiner">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <CardImg src="https://www.ancient-origins.net/sites/default/files/field/image/Remains-of-Buddha-Found.jpg" />
            </Card>
          </div>

        <div className="col-md-6">
          <div className="row">
         
              {home}
            
          </div>
        </div>

        </div>
      </div>
    );
  }

}

export default Home;