/***
 * Yelp Dataset Project
 * This is a reusable RadarChart component.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

export default class RadarGraph extends React.Component {
  render() {
    let { title, link, data, dataKey, width, height } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    let toRender = (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header)}>{title}</h2>
        <RadarChart
          outerRadius={'75%'}
          width={width ? width : 400}
          height={height ? height : 400}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey={'type'} tick={itemStyle} />
          <PolarRadiusAxis tick={itemStyle} />
          <Radar
            dataKey={dataKey}
            stroke={'#D32323'}
            fill={'#D32323'}
            fillOpacity={0.5}
          />
        </RadarChart>
      </div>
    );

    return link ? (
      <Link className={css(styles.linkContainer)} to={link}>
        {toRender}
      </Link>
    ) : (
      <div id="no-link-radar-chart-container">{toRender}</div>
    );
  }
}

const styles = StyleSheet.create({
  linkContainer: {
    cursor: 'pointer',
    textDecoration: 'none'
  },

  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0',
    textAlign: 'center'
  },

  header: {
    borderBottom: '3px solid #D32323',
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5em',
    padding: '5px 20px',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

const itemStyle = {
  color: '#333',
  fontFamily: 'Muli, sans-serif',
  fontSize: '0.85em'
};
