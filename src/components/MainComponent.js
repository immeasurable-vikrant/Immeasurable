import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';


import Coursera from './CourseraComponent';
import Learning from './LearningComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';






class Main extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      courses : COURSES,
      courses1 : COURSES1,
      courses2 : COURSES2,
     
    
       
    }
   
    
  }
 

  
  render() {

    return (
      <div>
        
        <Header  />
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1} />} 
                 />
            <Route exact path="/learning" component= {() => <Learning  activeTab = {this.state.activeTab} />} />
            < Route path="/coursera" component ={Coursera}/>
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;