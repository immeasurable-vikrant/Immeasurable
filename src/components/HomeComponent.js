import React, { Component } from 'react';
import { Card, CardImg, CardText, CardImgOverlay,Button } from 'reactstrap';
import Learning from './LearningComponent';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state ={
      selectedCourse: null
     
    }
  }

onCourseSelect(course) {
  this.setState({ selectedCourse: course });
}

renderCourse(course) {
  if(course!= null)
  {
    return(
    <div className="row">
    <h1>
      hello brother
    </h1>
    </div>
    );
  }
   return(
     <div></div>
   );

}



  render() {

    const home = this.props.courses.map((course) => {
      return( 

        <div key ={course.id } className="col-12 col-md-6 ">
        <div className="box text-center">
           <Card onClick= {()=> this.onCourseSelect(course)}>
               <CardImg src={course.image} alt={course.name}/>
               
                <CardImgOverlay>
		              <div className="box-content">
		                <ul className="icon">
		                  <li><a href="/learning"><i className="fa fa-play-circle"></i></a></li>
		                </ul>  
                    <CardText>{course.name}</CardText>
		              </div>  
		            </CardImgOverlay>
           </Card> 
           </div>   


        </div>
      
        
        
      );
    })

    return(
      <div className="conatiner">
        <div className="row row-content">
          <div className=" col-12 col-md-6">
           <div className="box text-center">
            <Card>
              <CardImg src="https://www.ancient-origins.net/sites/default/files/field/image/Remains-of-Buddha-Found.jpg" />
                <CardImgOverlay>
		              <div className="box-content">
		                <ul className="icon">
		                  <li><a href="/learning"><i className="fa fa-play-circle"></i></a></li>
		                </ul>
                    <CardText className="text-center">
		                  Conquering the Mind 
		                </CardText>
		              </div>  
		            </CardImgOverlay>
            </Card>
            </div>
          </div>

             <div className=" col-12 col-md-6">
               <div className="row">
                {home}  
               </div>
             </div>
          </div>  
          <div className="row row-col">
            <div className="col-3">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are <br/>
               passionate about Teaching.
              </p>
            </div>

            <div className="col-3">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are <br/>
               passionate about Teaching.
              </p>
                <Button className="btn-chacha" color="warning">Subscribe now</Button>
            </div>

            <div className="col-3">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are <br/>
               passionate about Teaching.
              </p>
            </div>
         
          </div>
          <h3 className="text-center">Browse our top courses</h3>
          
        </div>
     
    );
  }

}

export default Home;