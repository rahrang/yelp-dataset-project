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

// Data Files

const DATA_FILES = {

  // 0
  compliments: [
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
  years_to_elite: ['yearly'],

  // 2
  users_scatter: [
      'review_count_vs_average_stars',
      'review_count_vs_num_friends',
      'years_elite_vs_average_stars',
      'years_elite_vs_num_friends',
      'years_elite_vs_review_count'
    ],

  // 3
  overall: ['compliments']
}

const FILE = '../data/clean/cool.json';

class Routes extends React.Component {

  componentDidMount() {
    this.storeData();
  }

  storeData = () => {
    let data = this.collectData();
    this.props.mainActions.storeData(
      data[0],  // compliments
      data[1],  // years_to_elite
      data[2],  // users_scatter
      data[3]   // overall
    )
  }

  collectDataFromFolder = (dataItem) => {
    let data = {};
    dataItem[1].forEach((f) => {
      
      let file = '';
      
      switch (dataItem[0]) {
        case 'compliments':
          file = require(`../data/clean/compliment_${f}.json`);
          break
        case 'years_to_elite':
          file = require(`../data/final/years_to_elite_good/${f}.json`);
          break
        case 'users_scatter':
          file = require(`../data/final/users_scatter/${f}.json`)
          break
        case 'overall':
          file = require(`../data/final/${f}.json`)
          break
        default:
          return
      }

      data[f] = file;
    
    })
    return data
  }

  collectData = () => {

    let data = []
    
    Object.entries(DATA_FILES).forEach((dataItem) => {
      data.push(this.collectDataFromFolder(dataItem));
    })
    
    return data
  }

  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <div className={css(styles.mainContainer)}>
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/about'} component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
  return { main: state.main };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { mainActions: bindActionCreators(MainActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);