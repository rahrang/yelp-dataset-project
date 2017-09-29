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


// Local Components

// Data Files

// Constants


export default class ScatterPlot extends React.Component {

  render() {

    let { data, type } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    return (
      <div className={css(styles.chartContainer)}>

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
  data: {fill: '#D32323', opacity: 0.7, border:'5px solid #EBC074'},
  labels: {fontSize: 12},
}