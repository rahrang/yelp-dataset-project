/***
 * Yelp Dataset Project
 * This is the main page of the app.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { BarChart as Chart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// Local Components

// Data Files


export default class BarChart extends React.Component {

  render() {

    let { data, type } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    return (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header)}>{type}</h2>
        <Chart
          width={1000}
          height={300}
          data={data}
        >
          <XAxis dataKey='type' />
          <YAxis />
          <Tooltip />
          <Bar
            type='monotone'
            dataKey='value'
            barSize={90}
            fill={'#D32323'}
          />
        </Chart>
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