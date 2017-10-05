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

const BAR_CHARTS = ['review_count', 'average_stars'];
const TITLE_MAPPER = {
  average_stars: 'Average Stars on Elite Reviews',
  review_count: 'Number of Elite Reviews'
};

class Reviews extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.years)) {
      return null;
    }

    let charts = [];
    BAR_CHARTS.forEach(type => {
      charts.push({
        title: TITLE_MAPPER[type],
        data: main.reviews[type],
        xKey: 'bucket',
        width: 500,
        height: 400,
        showTooltip: true
      });
    });

    let barCharts = charts.map(chart => {
      return (
        <BarGraph
          key={chart.title}
          title={chart.title}
          link={null}
          data={chart.data}
          xKey={chart.xKey}
          height={chart.height}
          width={chart.width}
          showTooltip={chart.showTooltip}
        />
      );
    });

    return (
      <div className={css(styles.reviewContainer, styles.fadeIn)}>
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
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
