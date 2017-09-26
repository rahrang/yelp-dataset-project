import React from 'react';

// Local Components & Helpers
import './App.css';
import Routes from './components/routes.jsx';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

class App extends React.Component {
  render() {
    return (
      <div className={css(styles.appContainer)}>
        <Routes />
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
  },
})