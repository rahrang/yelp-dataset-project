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
// import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Scatter } from 'recharts';


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
        <ScatterChart width={800} height={500}>
          <XAxis dataKey={x} />
          <YAxis dataKey={y} />
          <CartesianGrid strokeDasharray="3 3" />
          <Scatter data={data} fill="#D32323" />
        </ScatterChart>
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