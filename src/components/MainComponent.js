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
import Module1a from './Module1(a)Component';
import Module2b from './Module2(b)Component';
import Coursera from './CourseraComponent';
import Coursera1 from './Coursera1Component';
import Learning from './LearningComponent';
import Wisdom from './WisdomComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import { MEDIUM} from '../shared/medium';
import { BLOGS } from '../shared/blogs';
import { VIDEOLINKS1 } from '../shared/videolinks1';











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
      videolinks1:VIDEOLINKS1,
      selectedMedium : null,
    }
   
  }
  
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
            
            
            <Route exact path="/module1a" component= {() => <Module1a datas={this.state.datas}  />}  /> />
            <Route exact path="/module2b" component= {() => <Module2b datas={this.state.datas}  />}  /> />
            <Route exact path="/coursera" component= {() => <Coursera videolinks={this.state.videolinks} />}  />
            <Route exact path="/coursera1" component= {() => <Coursera1 videolinks1={this.state.videolinks1} />}  />

            <Route exact path="/auth/login" component= {() => <Login/>}  /> 

            <Redirect to ="/home" />
          </Switch>

     <Footer />
      </div>
    );
  }
}

export default Main;