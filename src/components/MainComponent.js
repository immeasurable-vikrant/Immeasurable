import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import Learning from './LearningComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../authenticate/SignInComponent';



class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses : COURSES
    }
    
  }

  render() {

    return (
      <div>
        <Route path="/signin" component={SignIn} />
        <Header />
          <Switch>
            <Home courses = {this.state.courses} />
            <Route exact path="/Learning" component= {() => <Learning/>} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;