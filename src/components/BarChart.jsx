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
import { BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';

// Local Components

// Data Files


export default class BarGraph extends React.Component {

  render() {

    let { data, type } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    return (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header)}>{type}</h2>
        <BarChart width={800} height={500} data={data}>
          <XAxis dataKey={'type'} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={'value'} fill='#D32323'/>
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

const chartStyle = {
  data: {fill: '#D32323', opacity: 0.7},
  labels: {fontSize: 12},
  parent: {border: '1px solid #F5F5F5'}
}