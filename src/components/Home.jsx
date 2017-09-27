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
import BarChart from './BarChart.jsx';
const CHART_TYPES = ['average', 'median', 'min', 'max', 'mode', '10', '25', '75', '90']


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let { main } = this.props;
    let data = main.data.compliments;

    if (_.isEmpty(data)) {
      return null;
    }
    
    let charts = CHART_TYPES.map((t) => {
      return (
        <BarChart
          key={`chart_${t}`}
          type={t}
          data={data[t]}
        />
      )
    })


    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        {charts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
})