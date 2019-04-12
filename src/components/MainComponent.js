import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import Learning from './LearningComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../authenticate/SignInComponent';




class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses : COURSES,
      courses1 : COURSES1
    }
    
  }

  render() {

    return (
      <div>
        <Route path="/signin" component={SignIn} />
        <Header />
          <Switch>
            <Home courses = {this.state.courses}
            courses1 = {this.state.courses1}/>
            <Route exact path="/Learning" component= {() => <Learning/>} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;