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
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { fadeIn } from 'react-animations';

// Local Components
import BarGraph from './charts/BarGraph.jsx';
import RadarGraph from './charts/RadarGraph.jsx';

class Reviews extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.years)) {
      return null;
    }

    let barCharts = null;

    return (
      <div className={css(styles.reviewContainer, styles.fadeIn)}>
        <h2 className={css(styles.sectionHeader)}>Elite Reviews</h2>
        <div className={css(styles.bars)}>{barCharts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Reviews);

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  sectionHeader: {
    borderBottom: '3px solid #D32323',
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.375em',
    padding: '5px 0',
    textAlign: 'left'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
