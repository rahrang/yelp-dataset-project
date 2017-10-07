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

const BAR_CHARTS = ['review_stars', 'review_lengths'];
const MAPPER = {
  review_stars: {
    title: 'Stars on Elite Reviews',
    xLabel: '# Stars Given',
    yLabel: '# Elite Reviews',
    // yTicks: _.range(0, 440000, 40000),
    minPointSize: 1
  },

  review_lengths: {
    title: 'Length of Elite Reviews',
    xLabel: '# Words',
    yLabel: '# Elite Reviews',
    // yTicks: _.range(0, 450000, 5000),
    minPointSize: 1,
  }
};

const RADAR_CHARTS = ['average', 'median', 'maximum', 'mode', 'minimum'];

class Reviews extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.years)) {
      return null;
    }

    let barCharts = BAR_CHARTS.map(chart => {
      return (
        <BarGraph
          key={MAPPER[chart].title}
          title={MAPPER[chart].title}
          link={null}
          data={main.reviews[chart]}
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

    let radarCharts = RADAR_CHARTS.map(chart => {
      return (
        <RadarGraph
          key={`${chart} Review Compliments`}
          title={chart}
          link={null}
          data={main.reviews.review_compliments}
          dataKey={chart}
          width={400}
          height={300}
          hideAxes={false}
        />
      );
    });


    return (
      <div className={css(styles.reviewContainer, styles.fadeIn)}>
        <div className={css(styles.container)}>
          <h2 className={css(styles.sectionHeader)}>Elite Reviews & Tips</h2>
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

export default connect(mapStateToProps)(Reviews);

const styles = StyleSheet.create({
  reviewContainer: {
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
