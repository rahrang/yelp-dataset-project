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

class Home extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.years)) {
      return null;
    }

    const BAR_CHARTS = [
      {
        title: 'Elite Reviews & Tips',
        // link: '/yelp-dataset-project/reviews',
        data: main.compliments.all_stats.average,
        xKey: 'type',
        yKey: 'value',
        width: 300,
        height: 300,
        showTooltip: false,
        hideAxes: true
      },
      {
        title: 'Elite Years',
        link: '/yelp-dataset-project/years',
        data: main.years.yearly,
        xKey: 'year',
        yTicks: _.range(0, 2200, 200),
        bars: _.range(0, 14),
        width: 300,
        height: 300,
        showTooltip: false,
        hideAxes: true
      }
    ];

    let barCharts = BAR_CHARTS.map(chart => {
      return (
        <div className={css(styles.chartContainer)}>
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
            hideAxes={chart.hideAxes}
          />
        </div>
      );
    });

    return (
      <div className={css(styles.flexContainer, styles.fadeIn)}>
        <div className={css(styles.chartContainer)}>
          <RadarGraph
            title={'Elite Users'}
            link={'/yelp-dataset-project/elite_users'}
            data={main.users.review_votes}
            dataKey={'average'}
            width={300}
            height={300}
            hideAxes={true}
          />
        </div>
        <div className={css(styles.flexContainer)}>{barCharts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  chartContainer: {
    padding: '20px'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
