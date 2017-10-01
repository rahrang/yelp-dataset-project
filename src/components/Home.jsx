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
const SCATTER_PLOTS = ['review_count_vs_average_stars', 'review_count_vs_num_friends', 'years_elite_vs_average_stars', 'years_elite_vs_num_friends', 'years_elite_vs_review_count']


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
    
    let barcharts = CHART_TYPES.map((t) => {
      return (
        <BarChart
          key={`chart_${t}`}
          type={t}
          data={data[t]}
          categories={COMPLIMENTS.sort()}
        />
      )
    })

    let scatterplots = SCATTER_PLOTS.map((s) => {
      let axes = s.split('_vs_');
      return (
        <ScatterPlot
          data={main.users_scatter[s]}
          x={axes[0]}
          y={axes[1]}
        />
      )
    })

    return (
      <div>
        <div>
          {scatterplots}
        </div>
        <div className={css(styles.homeContainer, styles.fadeIn)}>
          {barcharts}
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