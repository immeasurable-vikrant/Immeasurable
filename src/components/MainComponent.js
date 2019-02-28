import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Question from './QuestionComponent';
import Explore from './ExploreComponent';
import { LEADERS } from '../shared/leaders';    
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        leaders:LEADERS
    };
  }

  render() {

    const ExplorePage = () => {
      return (
        <Explore leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/qa" component={Question} />
                <Route exact path="/explore" component={Explore} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default Main;