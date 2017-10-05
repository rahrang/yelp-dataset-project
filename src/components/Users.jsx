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
import RadarGraph from './charts/RadarGraph.jsx';
import BarGraph from './charts/BarGraph.jsx';

// Constants
const RADAR_CHARTS = ['average', 'median', 'maximum'];
const BAR_CHARTS = ['review_count', 'average_stars'];

const MAPPER = {
  average_stars: {
    title: 'Elite Users Average Stars',
    xLabel: '# Average Stars Given',
    yLabel: '# Elite Users',
    yTicks: _.range(0, 32000, 4000),
    minPointSize: 1
  },

  review_count: {
    title: 'Elite Users Number of Reviews',
    xLabel: '# Elite Reviews',
    yLabel: '# Elite Users',
    yTicks: _.range(0, 36000, 4000),
    minPointSize: 1
  }
};

class Users extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.users)) {
      return null;
    }

    let rCharts = [];
    RADAR_CHARTS.forEach(type => {
      rCharts.push({
        title: `${type} User Compliments`,
        data: main.users.review_votes,
        dataKey: type
      });
    });

    let radarCharts = rCharts.map(chart => {
      return (
        <RadarGraph
          key={chart.title}
          title={chart.title}
          link={null}
          data={chart.data}
          dataKey={chart.dataKey}
          width={400}
          height={300}
          hideAxes={false}
        />
      );
    });

    let bCharts = [];
    BAR_CHARTS.forEach(type => {
      bCharts.push({
        title: MAPPER[type].title,
        data: main.users[type],
        xKey: 'bucket',
        xLabel: MAPPER[type].xLabel,
        yLabel: MAPPER[type].yLabel,
        yTicks: MAPPER[type].yTicks,
        width: 800,
        height: 500,
        minPointSize: MAPPER[type].minPointSize,
        showTooltip: true
      });
    });

    let barCharts = bCharts.map(chart => {
      return (
        <BarGraph
          key={chart.title}
          title={chart.title}
          link={null}
          data={chart.data}
          xKey={chart.xKey}
          xLabel={chart.xLabel}
          yLabel={chart.yLabel}
          yTicks={chart.yTicks}
          height={chart.height}
          width={chart.width}
          minPointSize={chart.minPointSize}
          showTooltip={chart.showTooltip}
        />
      );
    });

    return (
      <div className={css(styles.userContainer, styles.fadeIn)}>
        <div className={css(styles.barContainer)}>
          <h2 className={css(styles.sectionHeader)}>Elite Reviews</h2>
          <div className={css(styles.bars)}>{barCharts}</div>
        </div>
        <div className={css(styles.radarContainer)}>
          <h2 className={css(styles.sectionHeader)}>User Compliments</h2>
          <div className={css(styles.radars)}>{radarCharts}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Users);

const styles = StyleSheet.create({
  userContainer: {
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

  radars: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
