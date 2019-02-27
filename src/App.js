import React, { Component } from 'react';
import './App.scss';
import Header from '../src/Components/header/header';
import Body from '../src/Components/body/body';
import Footer from '../src/Components/footer/footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
