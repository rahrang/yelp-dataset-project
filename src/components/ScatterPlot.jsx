/***
 * Yelp Dataset Project
 * This is the main page of the app.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
// import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';


// Local Components

// Data Files

// Constants


export default class ScatterPlot extends React.Component {

  render() {

    let { x, y, data, type } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    return (
      <div className={css(styles.chartContainer)}>
        <VictoryChart
          height={250}
          width={500}
          // domain={{x: [0, 2000], y: [0, 5]}}
        >
          <VictoryScatter
            x={x}
            y={y}
            style={chartStyle}
            size={1}
            data={data}
          />
        </VictoryChart>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    padding: '10px 0',
    textAlign: 'center',
  },

  header: {
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5em',
    textTransform: 'uppercase',
  },
})

const chartStyle = {
  data: {fill: '#D32323', opacity: 0.3},
  labels: {fontSize: 12},
}