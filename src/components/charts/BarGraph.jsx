/***
 * Yelp Dataset Project
 * This is a reusable BarChart component.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from 'recharts';

export default class BarGraph extends React.Component {
  render() {
    let {
      title,
      link,
      data,
      xKey,
      yKey,
      xTicks,
      yTicks,
      bars,
      width,
      height,
      showTooltip,
      hideAxes
    } = this.props;

    if (_.isEmpty(data)) {
      return null;
    }

    let chartBars = (
      <Bar dataKey={'value'} fill="#D32323" /*minPointSize={5}*/ />
    );

    if (bars) {
      chartBars = bars.map(i => {
        return (
          <Bar
            key={`num_years_to_elite: ${i}`}
            dataKey={_.toString(i)}
            barSize={40}
            fill={i % 2 === 0 ? '#D32323' : '#333333'}
            minPointSize={5}
          />
        );
      });
    }

    let toRender = (
      <div className={css(styles.chartContainer)}>
        <h2 className={css(styles.header, link && styles.hover)}>{title}</h2>
        <BarChart
          width={width ? width : 800}
          height={height ? height : 500}
          data={data}
          barGap={0}
        >
          <XAxis
            hide={hideAxes}
            dataKey={xKey}
            tick={itemStyle}
            ticks={xTicks && xTicks}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            hide={hideAxes}
            dataKey={yKey && yKey}
            tick={itemStyle}
            ticks={yTicks && yTicks}
            tickLine={false}
          />
          <CartesianGrid stroke="#999999" strokeDasharray="3 3" />
          {showTooltip && (
            <Tooltip
              separator={': '}
              tick={itemStyle}
              itemStyle={itemStyle}
              labelStyle={labelStyle}
              wrapperStyle={wrapperStyle}
              animationDuration={1000}
            />
          )}
          {chartBars}
        </BarChart>
      </div>
    );

    return link ? (
      <Link className={css(styles.linkContainer)} to={link}>
        {toRender}
      </Link>
    ) : (
      <div id="no-link-bar-chart-container">{toRender}</div>
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
  },

  hover: {
    ':hover': {
      borderBottom: '3px solid #0073BB',
      color: '#0073BB'
    }
  }
});

const labelStyle = {
  color: '#D32323',
  fontFamily: 'Muli, sans-serif',
  fontSize: '1em',
  borderBottom: '2px solid #333'
};

const itemStyle = {
  color: '#333',
  fontFamily: 'Muli, sans-serif',
  fontSize: '0.85em'
};

const wrapperStyle = {
  backgroundColor: '#F5F5F5',
  border: '1px solid #EBC074'
};
