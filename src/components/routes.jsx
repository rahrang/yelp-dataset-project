import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route } from 'react-router-dom';

// Actions
import { MainActions } from '../actions/main-actions';

// Containers
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

// Data Files
const FILES = ['compliments', 'average_stars', 'cool', 'fans', 'funny', 'num_friends', 'review_count', 'useful']
const COMPLIMENTS = ['cool', 'cute', 'funny', 'hot', 'list', 'more', 'note', 'photos', 'plain', 'writer']

class Routes extends React.Component {

  componentDidMount() {
    this.storeData();
  }

  storeData = () => {
    let data = this.collectData();
    this.props.mainActions.storeData(data[0], data[1])
  }

  collectData = () => {
    let data = {}
    let compliments = {}
    
    FILES.forEach((f) => {
      let point = require(`../data/clean/${f}.json`);
      data[f] = point
    });

    COMPLIMENTS.forEach((c) => {
      let point = require(`../data/clean/compliment_${c}.json`);
      compliments[c] = point
    });

    return [data, compliments]
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