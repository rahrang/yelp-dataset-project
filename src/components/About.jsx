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

export default class About extends React.Component {
  render() {
    return (
      <div className={css(styles.aboutContainer, styles.fadeIn)}>
        <p className={css(styles.paragraph)}>
          Hello! Thank you for taking the time to look through this app!
        </p>
        <p className={css(styles.paragraph)}>
          As a senior studying Computer Science and Economics at UC Berkeley, I
          only just recently decided to focus my efforts on developing stronger
          technical skills. <br /> When I brainstormed methods to do so, none
          stood out more than working on side projects that were truly
          meaningful to me.
        </p>
        <p className={css(styles.paragraph)}>
          I was inducted into Yelp's Elite Program this past summer. I spent A
          LOT of time discovering and writing reviews for restaurants in SoCal,
          Berkeley and San Francisco, and even Chicago. Throughout the latter
          half of July, I challenged myself to write at least 3 review per day
          to try to earn Yelp Elite by my 21st birthday in early August. With 85
          reviews on my profile, I received my Elite offer a few weeks after my
          birthday. When the school year started, I learned about Yelp's public
          dataset as I recruited (and still am recruiting) for a full-time job
          in product management or software engineering.
        </p>
        <p className={css(styles.paragraph)}>
          As an avid Yelp user and Elite member, I wanted to find out what made
          me special. Where did I fit in on the spectrum of other Elite users?
          Was I really qualified, or was it a fluke? <br /> In addition, I
          wanted to shed light on the statistics necessary (i.e. how many
          reviews are required, what's the average review length, etc.) to have
          a shot at becoming Elite.
        </p>
        <p className={css(styles.paragraph)}>
          I learned an extraordinary amount throughout the month it took me to
          build out a minimum version of this project. I'll soon write an
          article on Medium of my takeaways, so stay tuned! Enjoy!
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontFamily: 'Muli, sans-serif',
    fontSize: '1em',
    padding: '10px',
    width: '800px',
    margin: 'auto'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  },

  paragraph: {
    color: '#333',
    fontFamily: 'Muli, sans-serif',
    fontSize: '1.125em'
  }
});
