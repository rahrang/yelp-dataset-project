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
import { fadeIn } from 'react-animations';

// Local Components

// Data Files


export default class Navbar extends React.Component {
  render() {

    return (
      <div id='navbar-container' className={css(styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <Link to='/' className={css(styles.link)}>
            <h1 className={css(styles.header)}>  
                The Yelp Elite Project
            </h1>
          </Link>
          <div className={css(styles.creditContainer)}>
            <Link
              className={css(styles.creditLink)}
              to='/about'
            >
              About
            </Link>
            |
            <Link
              className={css(styles.creditLink)}
              to='https://github.com/rahrang/yelp-dataset-project'
              target='blank'
            >
              GitHub
            </Link>
            |
            <Link
              className={css(styles.creditLink)}
              to='http://rahrang.xyz'
              target='blank'
            >
              Rahul Rangnekar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#D32323',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
  },

  link: {
    textDecoration: 'none',
  },

  header: {
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2em',
    margin: 0,
    padding: '0 0 0 20px',
  },

  creditContainer: {
    color: '#F5F5F5',
    fontFamily: 'Muli, sans-serif',
    padding: '0 20px 0 0',
  },

  creditLink: {
    color: '#F5F5F5',
    cursor: 'pointer',
    padding: '0 3px',
    margin: '0 5px',
    textDecoration: 'none',
    ':hover': {
      color: '#333',
    },
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
})