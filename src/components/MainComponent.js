import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import { CARD1 } from '../shared/card1';

import Coursera from './CourseraComponent';
import Onclickk from './OnclickkComponent';
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
      card1 : CARD1  
     
    
       
    }
   
    
  }
 

  
  render() {

    return (
      <div>
        
     
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1} />} 
                 />
            <Route exact path="/learning" component= {() => <Learning  activeTab = {this.state.activeTab} />} />
            <Route exact path="/coursera" component= {() => <Coursera  card1 = {this.state.card1} />} />
            <Route exact path="/onclickk" component= {() => <Onclickk />} />
            <Redirect to ="/home" />
          </Switch>
     
      </div>
    );
  }
}

export default Main;