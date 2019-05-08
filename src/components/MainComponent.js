import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import { DATAS } from '../shared/data';
import { VIDEOLINKS } from '../shared/videolinks';


import Login from './LoginComponent';
import Article from './ArticleComponent';
import Modules from './ModuleComponent';
import Coursera from './CourseraComponent';
import Learning from './LearningComponent';
import Wisdom from './WisdomComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import { MEDIUM} from '../shared/medium';
import { BLOGS } from '../shared/blogs';











class Main extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      courses : COURSES,
      courses1 : COURSES1,
      courses2 : COURSES2,
      datas : DATAS,
      mediums : MEDIUM,
      blogs: BLOGS,
      videolinks: VIDEOLINKS,
      selectedMedium : null,
    }
    // this.toggle = this.toggle.bind(this); 
  }
 
  // toggle() {
  //   this.setState(state => ({ collapse: !state.collapse}));
  // }
  


  
  render() {
    return (
      <div>
        
     <Header />
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1} 
                  slideImage ={this.state.slideImage}
                 />} 
                 />
            <Route exact path="/learning" component= {() => <Learning  activeTab = {this.state.activeTab} />} />

            <Route exact path="/wisdom/" component= {() => <Wisdom mediums = {this.state.mediums} 
            medium = {this.state.selectedMedium } /> } />
            <Route exact path="/article" component= {() => <Article  blogs ={this.state.blogs}/>} />
            
            
            <Route exact path="/modules" component= {() => <Modules datas={this.state.datas}  />}  /> />
            <Route exact path="/coursera" component= {() => <Coursera videolinks={this.state.videolinks} />}  />

            <Route exact path="/auth/login" component= {() => <Login/>}  /> 

            <Redirect to ="/home" />
          </Switch>

     <Footer />
      </div>
    );
  }
}

export default Main;