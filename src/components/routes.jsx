import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route } from 'react-router-dom';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import * as _ from 'lodash';

// Actions
import { MainActions } from '../actions/main-actions';

// Containers
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Users from './Users.jsx';
import Years from './Years.jsx';
import Reviews from './Reviews.jsx';

// Data Files

const DATA_FILES = {
  // 0
  compliments: [
    'all_stats',
    'cool',
    'cute',
    'funny',
    'hot',
    'list',
    'more',
    'note',
    'photos',
    'plain',
    'writer'
  ],

  // 1
  years: _.range(2005, 2018).concat(['yearly', 'num_years_elite']),

  // 2
  reviews: [],

  // 3
  users: ['review_votes', 'average_stars', 'review_count']
};

class Routes extends React.Component {
  componentDidMount() {
    this.storeData();
  }

  storeData = () => {
    let data = this.collectData();
    this.props.mainActions.storeData(
      data[0], // compliments
      data[1], // years
      data[2], // reviews
      data[3] // users
    );
  };

  collectDataFromFolder = dataItem => {
    let data = {};
    dataItem[1].forEach(f => {
      let file = '';

      switch (dataItem[0]) {
        case 'compliments':
          file = require(`../data/final/compliments/${f}.json`);
          break;
        case 'years':
          file = require(`../data/final/years/${f}.json`);
          break;
        case 'reviews':
          file = require(`../data/final/reviews/${f}.json`);
          break;
        case 'users':
          file = require(`../data/final/users/${f}.json`);
          break;
        default:
          return;
      }

      data[f] = file;
    });
    return data;
  };

  collectData = () => {
    let data = [];

    Object.entries(DATA_FILES).forEach(dataItem => {
      data.push(this.collectDataFromFolder(dataItem));
    });

    return data;
  };

  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <div className={css(styles.mainContainer)}>
          <Navbar />
          <Switch>
            <Route exact path={'/yelp-dataset-project'} component={Home} />
            <Route path={'/yelp-dataset-project/about'} component={About} />
            <Route
              path={'/yelp-dataset-project/elite_users'}
              component={Users}
            />
            <Route path={'/yelp-dataset-project/years'} component={Years} />
            <Route path={'/yelp-dataset-project/reviews'} component={Reviews} />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return { main: state.main };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { mainActions: bindActionCreators(MainActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
