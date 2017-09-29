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
import ScatterPlot from './ScatterPlot.jsx';
const CHART_TYPES = ['average', 'median', 'min', 'max', 'mode', '10', '25', '75', '90']
const COMPLIMENTS = ['hot', 'more', 'plain', 'cute', 'list', 'note', 'plain', 'cool', 'funny', 'writer', 'photos']

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let { main } = this.props;
    let data = main.overall.compliments;

    if (_.isEmpty(data)) {
      return null;
    }
    
    let charts = CHART_TYPES.map((t) => {
      return (
        <BarChart
          key={`chart_${t}`}
          type={t}
          data={data[t]}
          categories={COMPLIMENTS.sort()}
        />
      )
    })

    // let charts = null;

    return (
      <div>
        <div>
          <ScatterPlot
            data={main.users_scatter.review_count_vs_average_stars}
          />
        </div>
        <div className={css(styles.homeContainer, styles.fadeIn)}>
          {charts}
        </div>
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