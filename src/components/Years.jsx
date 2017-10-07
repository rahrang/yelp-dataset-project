/***
 * Yelp Dataset Project
 * This page contains broken-down data for when users became elite.
 * author: @rahrang
*/

// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { fadeIn } from 'react-animations';

// Local Components
import BarGraph from './charts/BarGraph.jsx';

const YEARS = _.range(2005, 2018);

class Years extends React.Component {
  render() {
    let { main } = this.props;

    if (_.isEmpty(main.years)) {
      return null;
    }

    let yearCharts = [];
    YEARS.forEach(year => {
      yearCharts.push({
        title: year,
        data: main.years[year],
        xKey: 'year',
        xLabel: '# Years Yelping before Elite Induction',
        yLabel: '# Users inducted into Elite',
        bars: _.range(0, 14),
        width: 400,
        height: 400,
        showTooltip: true
      });
    });

    let charts = yearCharts.map(chart => {
      return (
        <BarGraph
          key={chart.title}
          title={chart.title}
          link={chart.link}
          data={chart.data}
          xKey={chart.xKey}
          xLabel={chart.xLabel}
          yLabel={chart.yLabel}
          yTicks={chart.yTicks}
          bars={chart.bars}
          height={chart.height}
          width={chart.width}
          showTooltip={chart.showTooltip}
        />
      );
    });

    return (
      <div className={css(styles.eliteYearsContainer, styles.fadeIn)}>
        <div className={css(styles.container)}>
          <h2 className={css(styles.sectionHeader)}>Elite Years</h2>
          <BarGraph
            key={'Years to Elite'}
            title={'Years to Elite'}
            data={main.years.yearly}
            xKey={'year'}
            xLabel={'Year'}
            yLabel={'# Users inducted into Elite'}
            yTicks={_.range(0, 2200, 200)}
            bars={_.range(0, 14)}
            width={1000}
            showTooltip={true}
          />
        </div>
        <div>
          <BarGraph
            key={'Number of Years Elite'}
            title={'Number of Years Elite'}
            data={main.years.num_years_elite}
            xKey={'bucket'}
            xLabel={'# Years'}
            yLabel={'# Elite Users'}
            yTicks={_.range(0, 16000, 2000)}
            width={1000}
            showTooltip={true}
          />
        </div>
        <div className={css(styles.container)}>
          <h2 className={css(styles.sectionHeader)}>Year by Year Breakdown</h2>
          <div className={css(styles.yearCharts)}>{charts}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { main: state.main };
};

export default connect(mapStateToProps)(Years);

const styles = StyleSheet.create({
  eliteYearsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  sectionHeader: {
    borderBottom: '3px solid #D32323',
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.375em',
    padding: '5px 0 5px 50px',
    textAlign: 'left',
    width: '100%'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  yearCharts: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
