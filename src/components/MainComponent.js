import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import { ARTICLES } from '../shared/articles';



import Coursera from './CourseraComponent';
import Onclickk from './OnclickkComponent';
import Learning from './LearningComponent';
import Wisdom from './WisdomComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import Blogs from './BlogComponent';









class Main extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      courses : COURSES,
      courses1 : COURSES1,
      courses2 : COURSES2,
      articles : ARTICLES
   
     
     
    
       
    }
   
    
  }
 

  
  render() {

    return (
      <div>
        
     <Header />
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1} />} 
                 />
            <Route exact path="/learning" component= {() => <Learning  activeTab = {this.state.activeTab} />} />
            <Route exact path="/coursera" component= {() => <Coursera  card1 = {this.state.card1} />} />
            <Route exact path="/onclickk" component= {() => <Onclickk />} />
            <Route exact path="/blogs" component= {() => <Blogs />} />
            <Route exact path="/wisdom" component= {() => <Wisdom articles = {this.state.articles} />} />
            <Redirect to ="/home" />
          </Switch>
     <Footer />
      </div>
    );
  }
}

export default Main;