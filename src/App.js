import React, { Component } from 'react';
import './App.scss';
import Header from '../src/header/header';
import Body from '../src/body/body';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
