import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import{ ITEMS } from '../shared/items';

import Coursera from './CourseraComponent';
import Learning from './LearningComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../authenticate/SignInComponent';





class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses : COURSES,
      courses1 : COURSES1,
      courses2 : COURSES2,
      activeTab: '1',
      items: ITEMS
    
      
    }
    
  }
  toggle(tab) {
    if (this.state.activeTab !== tab ) {
        this.setState({
          activeTab: tab
        });
    }
}
  render() {

    return (
      <div>
        <Route path="/signin" component={SignIn} />
        <Header />
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1}
                  courses2 = {this.state.courses2}
                  items = {this.state.items} />} 
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