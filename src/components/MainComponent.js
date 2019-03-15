import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Question from './QuestionComponent';
import Explore from './ExploreComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';																																																																																																																																																																																																																																																																																																																																																			import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders:LEADERS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/question" component= {() => <Question dishes={this.state.dishes} />} />
            <Route exact path="/explore" component={Explore} />} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;