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

const REVIEW_RADARS = ['average', 'median', 'maximum'];

class Users extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.users)) {
      return null;
    }

    let reviewCharts = [];
    REVIEW_RADARS.forEach(type => {
      reviewCharts.push({
        title: `${type} User Compliments`,
        data: main.users.review_votes,
        dataKey: type
      });
    });

    let radarCharts = reviewCharts.map(chart => {
      return (
        <RadarGraph
          key={chart.title}
          title={chart.title}
          link={null}
          data={chart.data}
          dataKey={chart.dataKey}
          width={500}
          height={400}
          hideAxes={false}
        />
      );
    });

    return (
      <div className={css(styles.userContainer, styles.fadeIn)}>
        {radarCharts}
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

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
