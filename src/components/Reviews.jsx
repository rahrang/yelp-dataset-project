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

class Reviews extends React.Component {
  render() {

    let { main } = this.props;

    if (_.isEmpty(main.elite_years)) {
      return null;
    }

    const BAR_CHARTS = [
      {
        title: 'Years to Elite',
        link: '/',
        data: main.elite_years.yearly,
        xKey: 'year',
        yTicks: _.range(0, 2200, 200),
        bars: _.range(0, 14),
        width: 1000
      },
      {
        title: 'Average Compliments',
        link: '/',
        data: main.compliments.all_stats.average,
        xKey: 'type',
        yKey: 'value',
      }
    ]

    let barCharts = BAR_CHARTS.map((chart) => {
      return (
        <BarGraph
          key={chart.title}
          title={chart.title}
          link={chart.link}
          data={chart.data}
          xKey={chart.xKey}
          yTicks={chart.yTicks}
          bars={chart.bars}
          height={chart.height}
          width={chart.width}
        />
      )
    });

    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        {barCharts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Reviews);

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