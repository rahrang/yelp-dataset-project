/***
 * Yelp Dataset Project
 * This is the main page of the app.
 * author: @rahrang
*/

// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

// Local Components

// Data Files


export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {

    return (
      <div className={css(styles.aboutContainer, styles.fadeIn)}>
        Under Construction!
      </div>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    color: '#333',
    fontFamily: 'Muli, sans-serif',
    fontSize: '1em',
    padding: '10px',
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
})