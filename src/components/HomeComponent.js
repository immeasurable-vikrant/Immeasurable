import React, { Component } from 'react';
import { Card, CardImg, CardText, CardImgOverlay,CardBody, CardSubtitle,CardTitle, Button } from 'reactstrap';
import Coursera from './CourseraComponent';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      selectedCourse : null
    }
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
		                  <li><a href="/"><i className="fa fa-play-circle"></i></a></li>
		                </ul>  
                    <CardText>{course.name}</CardText>
		              </div>  
		            </CardImgOverlay>
           </Card> 
           </div>   


        </div>
    
        
      );
    })
    const cours = this.props.courses1.map((course1) => {
      return(
        <div key ={course1.id } className="col-12 col-md-3 ">
           <Card className="text-card">
              <CardImg src={course1.image} alt={course1.name}/>
                  <CardBody>   
                    <CardTitle>{course1.name}</CardTitle>    
                    <CardSubtitle>{course1.name}</CardSubtitle> 
              </CardBody>
           </Card> 
           </div>
      );
    })
      
    return(
      <div className="conatiner">
        <div className="row row-content">
          <div className=" col-12 col-md-6">
           <div className="box text-center">
            <Card >
              <CardImg src="https://www.ancient-origins.net/sites/default/files/field/image/Remains-of-Buddha-Found.jpg" />
                <CardImgOverlay>
		              <div className="box-content">
		                <ul className="icon">
		                  <li><a href="/"><i className="fa fa-play-circle"></i></a></li>
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
          <div className="row row-col m-4">
            <div className="col-12 col-md-3  text-center">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are 
               passionate about Teaching.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are
               passionate about Teaching.
              </p>
                <Button className="btn-chacha" color="warning">Subscribe now</Button>
            </div>

            <div className="col-12 col-md-4 text-center ">
            <i className="fa fa-graduation-cap fa-lg " aria-hidden="true" ></i>
             <h4>Expert Masters</h4>
             <p>Learn from industry experts who are
               passionate about Teaching.
              </p>
            </div>
          </div>
          <h3 className="text-center">Browse our top courses</h3>
          <div className="row">
          {cours}
          </div>
          

            </div>
     
    );
  }

  
  

}

export default Home;