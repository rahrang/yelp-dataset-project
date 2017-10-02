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
import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from 'recharts';

// Local Components

// Data Files


export default class YearlyBarGraph extends React.Component {

  render() {

    let { data, type } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    let bars = _.range(0, 14).map((i) => {
      return (
        <Bar
          dataKey={_.toString(i)}
          barSize={40}
          fill={(i % 2 === 0) ? '#D32323' : '#333333'}
        />
      )
    })

    return (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header)}>Years To Become Elite</h2>
        <BarChart
          width={1000}
          height={500}
          data={data}
        >
          <XAxis
            dataKey={'year'}
            tick={itemStyle}
            tickLine={false}
            // label={'First Year Elite'}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tick={itemStyle}
            tickLine={false}
            ticks={_.range(0, 2200, 200)}
            // label={'Users'}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            separator={': '}
            tick={itemStyle}
            labelStyle={labelStyle}
            itemStyle={itemStyle}
            animationDuration={1000}
          />
          { bars }
        </BarChart>
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

const labelStyle = {
  color: '#D32323',
  fontFamily: 'Muli, sans-serif',
  fontSize: '1em',
  borderBottom: '2px solid #333',
}

const itemStyle = {
  color: '#333',
  fontFamily: 'Muli, sans-serif',
  fontSize: '0.85em',
}

const tickStyle = {
  color: '#333',
  fontFamily: 'Muli, sans-serif',
  fontSize: '0.85em',
}