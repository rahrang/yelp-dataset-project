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

class Routes extends React.Component {

  componentDidMount() {}

  collectData = () => {}

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
  return {
    main: state.main
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mainActions: bindActionCreators(MainActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);