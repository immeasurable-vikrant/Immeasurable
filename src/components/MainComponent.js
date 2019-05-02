import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import { ARTICLES } from '../shared/articles';
import { DATAS } from '../shared/data';

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
      articles : ARTICLES,
      datas : DATAS,
      mediums : MEDIUM,
      blogs: BLOGS,
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
            <Route exact path="/coursera" component= {() => <Coursera  />} />

            <Route exact path="/wisdom/" component= {() => <Wisdom mediums = {this.state.mediums} 
            medium = {this.state.selectedMedium } /> } />
            <Route exact path="/article" component= {() => <Article  blogs ={this.state.blogs}
            blogs={this.state.selectedMedium}/>} />
            
            
            <Route exact path="/modules" component= {() => <Modules datas={this.state.datas}  />}  /> />
            <Route exact path="/coursera" component= {() => <Coursera  />}  /> />
            
            <Redirect to ="/home" />
          </Switch>

     <Footer />
      </div>
    );
  }
}

export default Main;