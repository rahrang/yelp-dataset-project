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
  PolarRadiusAxis,
  Legend
} from 'recharts';

const COLOR_MAP = ['#E6E6E6', '#41A700', '#333333', '#0073BB', '#D32323'];

export default class RadarGraph extends React.Component {
  render() {
    let {
      title,
      link,
      data,
      dataKey,
      width,
      height,
      hideAxes,
      radars
    } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    let chartRadars = (
      <Radar
        dataKey={dataKey}
        stroke={'#D32323'}
        fill={'#D32323'}
        fillOpacity={0.5}
      />
    );

    if (radars) {
      chartRadars = radars.map((radar, index) => {
        return (
          <Radar
            dataKey={radar}
            stroke={COLOR_MAP[index]}
            fill={COLOR_MAP[index]}
            fillOpacity={0.5}
          />
        );
      });
    }

    let toRender = (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header, link && styles.hover)}>{title}</h2>
        <RadarChart
          outerRadius={'90%'}
          width={width ? width : 400}
          height={height ? height : 400}
          data={data}
        >
          <PolarGrid />
          {radars && (
            <Legend
              iconSize={12}
              iconType={'triangle'}
              wrapperStyle={itemStyle}
            />
          )}
          <PolarAngleAxis dataKey={'type'} tick={!hideAxes && itemStyle} />
          <PolarRadiusAxis tick={!hideAxes && itemStyle} />
          {chartRadars}
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
    fontSize: '1.125em',
    padding: '5px 20px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  hover: {
    ':hover': {
      borderBottom: '3px solid #0073BB',
      color: '#0073BB'
    }
  }
});

const itemStyle = {
  color: '#333',
  fontFamily: 'Muli, sans-serif',
  fontSize: '0.85em'
};
