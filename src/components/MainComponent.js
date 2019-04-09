import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Learning from './LearningComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../authenticate/SignInComponent';



class Main extends Component {

  render() {

    return (
      <div>
        <Route path="/signin" component={SignIn} />
        <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/Learning" component= {() => <Learning/>} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;