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
import { ChartContainer, ChartRow, YAxis, Charts, ScatterChart } from 'react-timeseries-charts';
import { TimeSeries, TimeRange } from 'pondjs';

// Local Components

// Data Files


export default class ScatterPlot extends React.Component {

  render() {

    // let { data, type } = this.props;

    // if (_.isEmpty(data)) {
    //   return null;
    // }

    const plotData = {
      name: 'general',
      columns: ['index', 'value'],
      points: [
          [2012, 5],
          [2013, 6],
          [2014, 7],
          // ['2015', 8],
          // ['2016', 9],
          // ['2017', 10],
          // ['2018', 11]
      ]
    }

    const finalData = new TimeSeries(plotData);
    const timeRange = new TimeRange([2012, 2018])

    return (
      <div className={css(styles.chartContainer)}>
        <ChartContainer
          timeRange={timeRange}
        >
          <ChartRow height={300}>
            <YAxis id='year' min={5} max={12} />
            <Charts>
              <ScatterChart
                axis='year'
                series={finalData}
                columns={['year', 'value']}
              />
            </Charts>
          </ChartRow>
        </ChartContainer>
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