/***
 * Yelp Dataset Project
 * This is the main page of the app.
 * author: @rahrang
*/

// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { fadeIn } from 'react-animations';

// Local Components

// Data Files


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidMount() {
  }

  addDataToStore = (data) => {
    this.props.mainActions.storeData(data);
  }

  render() {

    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    main: state.main
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  homeContainer: {
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
})