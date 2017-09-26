/***
 * Yelp Dataset Project
 * This is the main page of the app.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { fadeIn } from 'react-animations';

// Action File
import { MainActions } from '../actions/main-actions.js';

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
        <div className={css(styles.headerContainer)}>
          <h1 className={css(styles.header)}>The Yelp Elite Project</h1>
          <div className={css(styles.creditContainer)}>
            <a
              className={css(styles.creditLink)}
              href='/'
              // target='_blank'
            >
              About
            </a>
            |
            <a
              className={css(styles.creditLink)}
              href='https://github.com/rahrang/yelp-dataset-project'
              target='_blank'
            >
              GitHub
            </a>
            |
            <a
              className={css(styles.creditLink)}
              href='http://rahrang.xyz'
              target='_blank'
            >
              Rahul Rangnekar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    main: state.main,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    mainActions: bindActionCreators(MainActions, dispatch),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  homeContainer: {
  },

  headerContainer: {
    backgroundColor: '#D32323',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0',
  },

  header: {
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2.25em',
    margin: 0,
    padding: '0 0 0 20px',
  },

  creditContainer: {
    color: '#F5F5F5',
    fontFamily: 'Muli, sans-serif',
    padding: '0 20px 0 0',
  },

  creditLink: {
    color: '#F5F5F5',
    cursor: 'pointer',
    padding: '0 3px',
    margin: '0 5px',
    textDecoration: 'none',
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
})