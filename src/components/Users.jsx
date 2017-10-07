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
const RADAR_CHARTS = ['average', 'median', 'maximum', 'mode', 'minimum'];
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

    let statsRadar = (
      <RadarGraph
        key={'Percentiles User Compliments'}
        title={'Percentiles'}
        link={null}
        data={main.users.review_votes}
        dataKey={'10'}
        radars={['10', '25', 'median', '75', '90']}
        width={400}
        height={300}
        hideAxes={false}
      />
    );

    let radarCharts = RADAR_CHARTS.map(chart => {
      return (
        <RadarGraph
          key={`${chart} User Compliments`}
          title={chart}
          link={null}
          data={main.users.review_votes}
          dataKey={chart}
          width={400}
          height={300}
          hideAxes={false}
        />
      );
    });

    radarCharts.unshift(statsRadar);

    let barCharts = BAR_CHARTS.map(chart => {
      return (
        <BarGraph
          key={MAPPER[chart].title}
          title={MAPPER[chart].title}
          link={null}
          data={main.users[chart]}
          xKey={'bucket'}
          xLabel={MAPPER[chart].xLabel}
          yLabel={MAPPER[chart].yLabel}
          yTicks={MAPPER[chart].yTicks}
          height={500}
          width={800}
          minPointSize={MAPPER[chart].minPointSize}
          showTooltip={true}
        />
      );
    });

    return (
      <div className={css(styles.userContainer, styles.fadeIn)}>
        <div className={css(styles.container)}>
          <h2 className={css(styles.sectionHeader)}>Elite Users</h2>
          <div className={css(styles.bars)}>{barCharts}</div>
        </div>
        <div className={css(styles.container)}>
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
    justifyContent: 'center',
    width: '100%',
  },

  sectionHeader: {
    borderBottom: '3px solid #D32323',
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.375em',
    textAlign: 'left',
    padding: '5px 0 5px 50px',
    width: '100%',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 20px',
    width: '100%',
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
